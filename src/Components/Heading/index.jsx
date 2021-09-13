import { useCounterContext } from "../../Context/CounterContext"

export function Heading(){
  const [state] = useCounterContext()
  return (
    <h1 style={{fontSize:'20px'}}>{state.loading ? 'loading...' : state.counter}</h1>
  )
}