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

  async function laodTasks() {
    await api
      .get(`/task/filter/${filteActived}/11:11:11:11:11:22`)
      .then((response) => {
        setTasks(response.data);
      });
  }
  useEffect(() => {
    laodTasks();
  }, [filteActived]);

  return (
    <stl.container>
      <Header />
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
        <h1>Tarefas</h1>
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
