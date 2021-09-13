import { useEffect } from "react";
import { useCounterContext } from "../../Context/CounterContext";
import { Button } from "../../Components/Button";
import { Heading } from "../../Components/Heading";
export function Home() {
  const [state, actions] = useCounterContext()
  useEffect(() => {
    
   actions().increase()
  }, [actions])
  
  return (
    <div >
      <Heading />
      <div>
        <Button onButtonClick={() => actions().increase()}>Increase</Button>
        <Button onButtonClick={() => actions().decrease()}>Decrease</Button>
        <Button onButtonClick={() => actions().reset()}>Reset</Button>
        <Button onButtonClick={() => actions().setCounter({counter: 10 })}>set 10</Button>
        <Button onButtonClick={() => actions().setCounter({counter: 500 })}>set 500</Button>
        <Button disabledButton={state.loading} onButtonClick={() => actions().asyncIncrease()}>async increase</Button>
        <Button disabledButton={state.loading} onButtonClick={() => actions().asyncError()}>async error</Button>
      </div>
    </div>
  );
}

