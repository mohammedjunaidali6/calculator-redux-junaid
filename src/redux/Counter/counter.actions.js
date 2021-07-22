import { INCREMENT, DECREMENT, MULTIPLICATION, DIVISION } from "./counter.types";

export const increaseCounter = () =>{
    return{
        type: INCREMENT,
    }
}
export const decreaseCounter = () =>{
    return{
        type: DECREMENT,
    }
}
export const multiplyCounter = () =>{
    return{
        type: MULTIPLICATION,
    }
}
export const divisionCounter = () =>{
    return{
        type: DIVISION,
    }
}

