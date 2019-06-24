import React, { useState, createContext, useContext } from 'react'
import ListEntry from './ListEntry'
import ListHeader from './ListHeader'
import NewTodoForm from './NewTodoForm'
import AddNewEntryButton from './AddNewEntryButton'
import { AppContext } from '../App'

export const ListContext = createContext()
export const TodaysTodosContext = createContext()

export default function List() {
  const { todaysTodos, setTodaysTodos } = useContext(AppContext)
  const [ showingForm, setShowingForm ] = useState(false)

  const showOrHideForm = () => {
    setShowingForm(!showingForm)
  }

  return (
    <div className="active_list">
      <ListHeader />
      { todaysTodos && todaysTodos.map(entry => {
        const { text, isDone, id } = entry
        return <ListContext.Provider key={id} value={{ text, isDone, id }}>
          <ListEntry />
        </ListContext.Provider>
      })}
      <TodaysTodosContext.Provider value={{ todaysTodos, setTodaysTodos }}>
        { showingForm && <NewTodoForm /> }
      </TodaysTodosContext.Provider>
      <AddNewEntryButton showOrHideFormHandler={showOrHideForm} showingForm={showingForm} />
    </div>
  )
}