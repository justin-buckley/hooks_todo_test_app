import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "./List";
import { modifyEntryIsDone } from "../dummyDB";

export default function ListEntry() {
  const { text, isDone, id } = useContext(ListContext);
  const [isChecked, setIsChecked] = useState(isDone);

  const handleEntryCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    modifyEntryIsDone(id, isChecked);
  }, [isChecked, id]);

  return (
    <label className="entry">
      {text}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleEntryCheckboxClick}
      />
      <span className="checkmark"></span>
    </label>
  );
}
