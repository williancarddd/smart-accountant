import { actionsTypesCrease } from "./actions-types"

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({type: actionsTypesCrease.INCREASE}),
    decrease: () => dispatch({type: actionsTypesCrease.DECREASE}),
    reset: () => dispatch({type:actionsTypesCrease.RESET}),
    setCounter: (payload) => dispatch({type: actionsTypesCrease.SET_COUNTER, payload}),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch)
  }
}

const asyncIncreaseFn = async (dispatch) => {
  dispatch({type: actionsTypesCrease.ASYNC_INCREASE_START})
  return await new Promise(r => {
    setTimeout(() => {
      dispatch({type: actionsTypesCrease.ASYNC_INCREASE_END})
      r('resolved')
    }, 2000)
  })
}

const asyncErrorFn = async (dispatch) => {
  dispatch({type: actionsTypesCrease.ASYNC_INCREASE_START})
  return await new Promise(r => {
    setTimeout(() => {
      dispatch({type: actionsTypesCrease.ASYNC_INCREASE_ERROR})
      r('resolved')
    }, 2000)
  })
}