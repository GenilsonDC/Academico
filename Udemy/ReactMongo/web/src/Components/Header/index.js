import React from "react";
import * as stl from "./style";
import { Link } from "react-router-dom";
import logo from "../../Assets/icoCrown.png";
import bell from "../../Assets/bell.png";

function Header({ lateTasks, clickedNotification }) {
  return (
    <stl.container>
      <stl.leftSide>
        <img src={logo} alt="logo " />
        <h2>Genilson</h2>
      </stl.leftSide>
      <stl.righttSide>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <Link to="/">INICIO</Link>
        <span className="tabs"></span>

        <Link to="/task"> NOVA TAREFA</Link>
        <span className="tabs"></span>

        <a href="#">SINCRONIZAR CELULAR</a>

        <button onClick={clickedNotification} id="notification">
          <img
            src={bell}
            alt="Sino com quantidade de notificação de tarefas atrasadas"
          />
          <span>{lateTasks}</span>
        </button>
      </stl.righttSide>
    </stl.container>
  );
}
export default Header;
