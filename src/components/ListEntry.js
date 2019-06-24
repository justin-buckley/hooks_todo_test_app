import React from 'react';

export default function ListEntry({ text }) {
  return (
    <label className="entry">{ text }
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  )
}