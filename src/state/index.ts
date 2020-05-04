import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'


interface Action {
  type: string
  payload: any
}

export interface State {
  message: string
}

export const defaultState: State = {
  message: 'Welcome!'
}

export function reducer(state = defaultState, action: Action): State {
  if (action.type === 'SET_MESSAGE') {
    return { ...state, message: action.payload }
  }
  return state
}

export function setMessage(message: string) {
  return { type: 'SET_MESSAGE', payload: message }
}

export function selectOwnState(globalState: any): State {
  return globalState
}

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)