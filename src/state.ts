import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


/************************************************
 * Helpers for type safe redux workflow
 ************************************************/

export interface AnyAction {
  type: string;
}

export interface Action<P> {
  type: string;
  payload: P;
}

export interface ActionCreator<P> {
  (payload: P): Action<P>;
  type: string;
}

export function createAction<P = void>(type: string): ActionCreator<P> {
  function actionCreator(payload: P) {
    return {
      type: type,
      payload: payload
    }
  }
  actionCreator.type = type
  return actionCreator
}

export function isType<P>(
  action: AnyAction,
  actionCreator: ActionCreator<P>
): action is Action<P> {
  return action.type === actionCreator.type
}

/************************************************
 * Domain code
 ************************************************/

export interface State {
  welcomeMessage: string
}

export const actions = {
  setWelcomeMessage: createAction<string>('SET_WELCOME_MESSAGE')
}

export const selectors = {
  getWelcomeMessage(state: State) {
    return state.welcomeMessage
  }
}

export const defaultState: State = {
  welcomeMessage: 'Hello!'
}

export function reducer(state=defaultState, action: AnyAction): State {
  if (isType(action, actions.setWelcomeMessage)) {
    return { ...state, welcomeMessage: action.payload }
  }

  return state
}

export const store = createStore(reducer, composeWithDevTools())