import React, { useMemo } from "react";
import { format } from "date-fns";
import * as stl from "./style";
import typeIcons from "../../Utils/typeIcons";

function TaskCards({ type, title, when }) {
  const date = useMemo(() => format(new Date(when), "dd/MM/yyyy"));
  const hour = useMemo(() => format(new Date(when), "HH:mm"));

  return (
    <stl.container>
      <stl.topCard>
        <img src={typeIcons[type]} alt="Icone da tarefa" />
        <h2>{title}</h2>
      </stl.topCard>
      <stl.bottonCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </stl.bottonCard>
    </stl.container>
  );
}
export default TaskCards;
