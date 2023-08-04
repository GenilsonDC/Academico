/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import * as stl from "./style";
import { format } from "date-fns";

// ********** Components ***********
import Header from "../../Components/Header";
import typeIcons from "../../Utils/typeIcons";
import Footer from "../../Components/Footer";

function Task({ match }) {
  const [id, setId] = useState();
  const [mac_address, setMacAdress] = useState("11:11:11:11:11:22");
  const [type, setType] = useState();
  const [lateTasks, setLateTasks] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [done, setDone] = useState(false);
  const [hour, setHour] = useState();

  async function saveTask() {
    await api
      .post("/task", {
        mac_address,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`,
      })
      .then(() => alert("✅ Tarefa cadastrada com sucesso"));
  }

  async function laodTasksDetais() {
    await api.get(`/task/${match.params.id}`).then((response) => {
      setType(response.data.type);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDate(format(new Date(response.data.when), "yyyy-MM-dd"));
      setHour(format(new Date(response.data.when), "HH:mm"));
    });
  }

  async function lateTasksVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:22`).then((response) => {
      setLateTasks(response.data.length);
    });
  }

  useEffect(() => {
    lateTasksVerify();
    laodTasksDetais();
  }, []);

  return (
    <stl.container>
      <Header lateTasks={lateTasks} clickedNotification={Notification} />
      <stl.form>
        <div id="ContainerAll">
          <stl.typeIcons>
            {typeIcons.map(
              (icon, index) =>
                index > 0 && (
                  <button type="button" onClick={() => setType(index)}>
                    <img
                      src={icon}
                      alt="icones das tarefas, o selecionado esta em destaque"
                      className={type && type !== index && "inative"}
                    />
                  </button>
                )
            )}
          </stl.typeIcons>

          <stl.titleTsak>
            <span>Nome da tarefa</span>
            <input
              type="text"
              placeholder="Digite o nome da tarefa ou evento"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></input>
          </stl.titleTsak>
          <stl.textArea>
            <span>Descrição</span>
            <textarea
              rows={5}
              placeholder="Descreva os detalhes do evento"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </stl.textArea>
          <stl.titleTsak>
            <span>Data 📆</span>
            <input
              type="date"
              alt="Campo para selecionar a data 31/12/9999"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            ></input>
          </stl.titleTsak>
          <stl.titleTsak>
            <span>Horário 🕑</span>
            <input
              type="time"
              alt="Campo para selecionar a hora"
              onChange={(e) => setHour(e.target.value)}
              value={hour}
            ></input>
          </stl.titleTsak>
          <stl.state>
            <div>
              <input
                type="checkbox"
                alt="Checkbox"
                checked={done}
                onChange={() => setDone(!done)}
                value={done}
              ></input>
              <span>Concluído</span>
            </div>
            <button type="button">EXCLUIR</button>
          </stl.state>
          <stl.btnSave>
            <button type="button" onClick={saveTask}>
              SALVAR
            </button>
          </stl.btnSave>
        </div>
      </stl.form>
      <Footer />
    </stl.container>
  );
}

export default Task;
