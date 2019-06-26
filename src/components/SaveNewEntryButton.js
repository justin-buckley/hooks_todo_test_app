import React, { useContext } from "react";
import { NewTodoFormContext } from "./NewTodoForm";

export default function SaveNewEntryButton() {
  const { handleSubmit } = useContext(NewTodoFormContext);

  const clickHandler = () => {
    handleSubmit();
  };

  return (
    <a href="#" className="save_new_entry" onClick={clickHandler}>
      Save
    </a>
  );
}
