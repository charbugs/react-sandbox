import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state'
import CssBaseline from '@material-ui/core/CssBaseline'
import { App } from './App'

ReactDom.render(
  <Provider store={store}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </Provider>,
  document.getElementById('app')
)