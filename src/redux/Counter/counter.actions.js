import {INCREMENT, DECREMENT, MULTIPLICATION, DIVISION} from "./counter.types";
export const increaseCounter = (count) => {
  return{
    type: INCREMENT,
    payload: count
  }
}
export const decreaseCounter = (count) => {
  return{
    type: DECREMENT,
    payload: count
  }
}
export const multiplyCounter = (count) => {
  return{
    type: MULTIPLICATION,
    payload: count
  }
}
export const divisionCounter = (count) => {
  return{
    type: DIVISION,
    payload: count
  }
}