import React from 'react'
import ReactDom from 'react-dom'
import { store } from './state'
import { Provider } from 'react-redux'
import { App } from './components/App'

const app = document.createElement('div')
app.id = 'app'
document.body.appendChild(app)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'))