import React, { useContext } from 'react'

import { AppContext } from '../App'

export default function ListHeader() {
  // const { formattedDate: { current: date } } = useContext(AppContext)
  const { formattedDate } = useContext(AppContext)

  return (
    <h4>{ formattedDate }</h4>
  )
}