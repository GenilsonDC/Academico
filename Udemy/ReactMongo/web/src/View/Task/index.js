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
        <stl.typeIcons>
          {typeIcons.map(
            (icon, index) =>
              index > 0 && (
                <img
                  src={icon}
                  alt="icones das tarefas, o selecionado esta em destaque"
                />
              )
          )}
        </stl.typeIcons>
      </stl.form>
      <Footer />
    </stl.container>
  );
}

export default Task;
