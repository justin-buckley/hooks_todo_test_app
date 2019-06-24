import React, { useContext } from "react";

import { AppContext } from '../App'

export default function Header() {
  // const { formattedDate: { current: date } } = useContext(AppContext)
  const { formattedDate } = useContext(AppContext)

  return (
    <header className="App-header">
      <h1>To do today</h1>
      <h4>{ formattedDate }</h4>
    </header>
  )
}