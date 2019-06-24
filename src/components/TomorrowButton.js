import React, { useContext } from 'react'
import DayChooserButton from './DayChooserButton'

import { AppContext } from '../App'

export default function TomorrowButton() {
  const { goToTomorrow } = useContext(AppContext)

  return (
    <DayChooserButton classAndText={'tomorrow'} clickHandler={goToTomorrow} />
  )
}