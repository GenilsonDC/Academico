import React from "react";
import * as stl from "./style";
import filter from "../../Assets/filter.png";

function Filter({ title, isSelected }) {
  return (
    <stl.container isSelected={isSelected}>
      <img src={filter} alt="filtro de pesquisa" />
      <span>{title}</span>
    </stl.container>
  );
}

export default Filter;
