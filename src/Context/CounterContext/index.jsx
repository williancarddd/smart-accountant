import { createContext, useCallback, useContext, useReducer } from "react";
import { buildActions } from "./build-actions";
import { reducer } from "./reducer";


export const initialState = {
  counter: 0,
  loading: false
}

const ContextCounter = createContext()

export function CounterContext({children}){
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useCallback(() => {
    return buildActions(dispatch)
  }, [dispatch]) // uma forma de proteger o dispatch > é só uma máscara
  return (
  <ContextCounter.Provider value={[state, actions]}>
    {children}
  </ContextCounter.Provider>
  )
}

export const useCounterContext = () => {
  const state = useContext(ContextCounter) // retorna o value do provider, que , no caso , é um array de objetos
  // quando será undefined ?
  if(state === undefined) {
    // se o state for undefined, quer dizer que o componente que
    //está usando o useCounterContext não está englobado no contexto
    //que pertence ao useCounterContext.
    throw new Error('you have that put the component in the global context counter <CounterContext>You component<CounterContext/>')
  }
  return [...state]
}
