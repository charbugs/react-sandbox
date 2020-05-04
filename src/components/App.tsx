import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navigation } from './Navigation'
import { Home } from './Home'
import { About } from './About'

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}