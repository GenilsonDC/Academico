/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import * as stl from "./style";

// ********** Components ***********
import Header from "../../Components/Header";
import Filter from "../../Components/Filter";
import TaskCards from "../../Components/TaskCards";
import Footer from "../../Components/Footer";

function Home() {
  const [filteActived, setFilterActived] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [lateTasks, setLateTasks] = useState();

  async function laodTasks() {
    await api
      .get(`/task/filter/${filteActived}/11:11:11:11:11:22`)
      .then((response) => {
        setTasks(response.data);
      });
  }

  async function lateTasksVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:22`).then((response) => {
      setLateTasks(response.data.length);
    });
  }

  function Notification() {
    setFilterActived("late");
  }

  useEffect(() => {
    laodTasks();
    lateTasksVerify();
  }, [filteActived, laodTasks]);

  return (
    <stl.container>
      <Header lateTasks={lateTasks} clickedNotification={Notification} />
      <stl.FilterContainer>
        <button type="button" onClick={() => setFilterActived("all")}>
          <Filter title="Todos" isSelected={filteActived === "all"} />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <Filter title="Hoje" isSelected={filteActived === "today"} />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <Filter title="Semana" isSelected={filteActived === "week"} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <Filter title="Mês" isSelected={filteActived === "month"} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <Filter title="Ano" isSelected={filteActived === "year"} />
        </button>
      </stl.FilterContainer>
      <stl.Toptitle>
        <h1>{filteActived === "late" ? "ATRASADAS" : "TAREFAS"}</h1>
      </stl.Toptitle>
      <stl.TaskCardsContainer>
        {tasks.map((item) => (
          <TaskCards type={item.type} title={item.title} when={item.when} />
        ))}
      </stl.TaskCardsContainer>
      <Footer />
    </stl.container>
  );
}

export default Home;
