import React from 'react'
import { useSelector } from 'react-redux'
import { selectOwnState } from '../state'

export function Home() {
  const state = useSelector(selectOwnState)
  return <div>{state.message}</div>
}