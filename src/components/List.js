import React, { useContext } from 'react'
import ListEntry from './ListEntry'
import { AppContext } from '../App'

export default function List() {
  const { dummyDB, formattedDate } = useContext(AppContext)
  const todaysTodos = dummyDB[formattedDate]

  return (
    <div className="active_list">
      { todaysTodos && todaysTodos.map(entry => {
        return <ListEntry key={entry} text={entry} />
      })}
    </div>
  )
}