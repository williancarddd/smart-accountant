// reducer somente tem o trabalho de mudar o estado
import { initialState } from ".";
import { actionsTypesCrease } from "./actions-types";

export const reducer = (state, action) => {
  console.log(action) /// action vem do dispatch
  switch (action.type){
    case actionsTypesCrease.INCREASE:
      return {...state, counter: state.counter + 1}
    case actionsTypesCrease.DECREASE:
      return {...state, counter: state.counter - 1}
    case actionsTypesCrease.RESET:
      return {...initialState}
    case actionsTypesCrease.SET_COUNTER:
      return {...state, ...action.payload}
    case actionsTypesCrease.ASYNC_INCREASE_START:
      return {...state, loading:true}
    case actionsTypesCrease.ASYNC_INCREASE_END:
      return {...state, loading: false, counter: state.counter +1}
    case actionsTypesCrease.ASYNC_INCREASE_ERROR:
      return {...state, loading:false}
    default:
      return {...state}
  }
}