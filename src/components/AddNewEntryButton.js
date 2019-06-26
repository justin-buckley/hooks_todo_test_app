import React from "react";

export default function AddNewEntryButton({
  showOrHideFormHandler,
  showingForm
}) {
  const clickHandler = () => {
    showOrHideFormHandler();
  };

  return (
    <div className="add_new_entry_button_container">
      <div className="add_new_entry_button">
        <a href="#" onClick={clickHandler}>
          {showingForm ? "Close form" : "Add new entry"}
        </a>
      </div>
    </div>
  );
}
