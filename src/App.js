import React, { useState, useEffect, createContext } from 'react'
import './App.css'

import Header from './components/Header'
import Container from './components/Container'
import YesterdayButton from './components/YesterdayButton'
import TomorrowButton from './components/TomorrowButton'
import List from './components/List'

import dummyDB from './dummyDB'

export const AppContext = createContext()

function getMonthName(monthAsNum) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return months[monthAsNum]
} 

function dateFormatter(date) {
  const day = date.getDate()
  const month = getMonthName(date.getMonth())
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}

function App() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [formattedDate, setFormattedDate] = useState(dateFormatter(currentDate))
  // const formattedDate = useRef(dateFormatter(currentDate))
  
  // useEffect(() => {
  //   formattedDate.current = dateFormatter(currentDate)
  //   console.log("from effect: ", formattedDate.current)
  //   console.log("currentDate.getDate ", currentDate.getDate())
  // }, [currentDate])

  useEffect(() => {
    setFormattedDate(dateFormatter(currentDate))
  }, [currentDate, formattedDate])

  function goToTomorrow() {
    const tomorrow = new Date()
    tomorrow.setDate(currentDate.getDate() + 1)
    setCurrentDate(tomorrow)
  }
  
  function goToYesterday() {
    const yesterday = new Date()
    yesterday.setDate(currentDate.getDate() - 1)
    setCurrentDate(yesterday)
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ goToTomorrow, goToYesterday, formattedDate, dummyDB }}>
        <Header />
        <Container>
          <YesterdayButton />
            <List />
          <TomorrowButton />
        </Container>
      </AppContext.Provider>
    </div>
  );
}

export default App
