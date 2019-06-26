import React from "react";

export default function DayChooserButton({ classAndText, clickHandler }) {
  function handleClick(event) {
    event.preventDefault();
    clickHandler();
  }

  return (
    <div className={classAndText}>
      <a href="#" onClick={handleClick}>
        {classAndText}
      </a>
    </div>
  );
}
