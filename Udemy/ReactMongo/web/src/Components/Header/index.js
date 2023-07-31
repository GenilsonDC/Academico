import React from "react";
import * as stl from "./style";

import logo from "../../Assets/logo.png";
import bell from "../../Assets/bell.png";

function Header() {
  return (
    <stl.container>
      <stl.leftSide>
        <img src={logo} alt="logo To-Do" />
      </stl.leftSide>
      <stl.righttSide>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a href="#">INICIO</a>
        <span className="tabs"></span>

        <a href="#"> NOVA TAREFA</a>
        <span className="tabs"></span>

        <a href="#">SINCRONIZAR CELULAR</a>

        <a href="#" id="notification">
          <img src={bell} alt="Sino com quantidade de notificação" />
          <span>2</span>
        </a>
      </stl.righttSide>
    </stl.container>
  );
}
export default Header;
