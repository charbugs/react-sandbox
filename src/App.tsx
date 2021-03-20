import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from './state'

export function App() {
  const welcome = useSelector(selectors.getWelcomeMessage)

  return (
    <p>{welcome}</p>
  )
}