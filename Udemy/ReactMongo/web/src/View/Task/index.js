/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import * as stl from "./style";

// ********** Components ***********
import Header from "../../Components/Header";
import typeIcons from "../../Utils/typeIcons";
import Footer from "../../Components/Footer";

function Task() {
  const [lateTasks, setLateTasks] = useState();
  const [type, setType] = useState();

  async function lateTasksVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:22`).then((response) => {
      setLateTasks(response.data.length);
    });
  }

  useEffect(() => {
    lateTasksVerify();
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
            ></input>
          </stl.titleTsak>
          <stl.textArea>
            <span>Descrição</span>
            <textarea
              rows={5}
              placeholder="Descreva os detalhes do evento"
            ></textarea>
          </stl.textArea>
          <stl.titleTsak>
            <span>Data 📆</span>
            <input
              type="date"
              alt="Campo para selecionar a data 31/12/9999"
            ></input>
          </stl.titleTsak>
          <stl.titleTsak>
            <span>Hora 🕑</span>
            <input type="time" alt="Campo para selecionar a hora"></input>
          </stl.titleTsak>
        </div>
      </stl.form>
      <Footer />
    </stl.container>
  );
}

export default Task;
