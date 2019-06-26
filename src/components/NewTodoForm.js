import React, { useState, useContext, createContext } from "react";
import SaveNewEntryButton from "./SaveNewEntryButton";
import { createNewEntry } from "../dummyDB";
import { AppContext } from "../App";
import { TodaysTodosContext } from "./List";

export const NewTodoFormContext = createContext();

export default function NewTodoForm() {
  const [entryText, setEntryText] = useState("");
  const { formattedDate } = useContext(AppContext);
  const { setTodaysTodos } = useContext(TodaysTodosContext);

  const handleSubmit = () => {
    const newTodos = createNewEntry(formattedDate, entryText);
    setTodaysTodos(newTodos);
    setEntryText("");
  };

  const handleChange = event => {
    setEntryText(event.target.value);
  };

  return (
    <div className="new_entry_form">
      <form onSubmit={handleSubmit}>
        <textarea value={entryText} onChange={handleChange} />
      </form>
      <NewTodoFormContext.Provider value={{ handleSubmit }}>
        <SaveNewEntryButton />
      </NewTodoFormContext.Provider>
    </div>
  );
}
