import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">About</Link>
    </div>
  )
}