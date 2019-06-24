import React, { useContext } from 'react'
import DayChooserButton from './DayChooserButton'

import { AppContext } from '../App'

export default function YesterdayButton() {
  const { goToYesterday } = useContext(AppContext)

  return (
    <DayChooserButton classAndText={'yesterday'} clickHandler={goToYesterday} />
  )
}