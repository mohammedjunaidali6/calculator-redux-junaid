import {INCREMENT, DECREMENT, MULTIPLICATION, DIVISION} from "./counter.types";

const INITIAL_STATE ={
  count: 0, 
}

const reducer =(state = INITIAL_STATE, action) => {
  switch(action.type){
    case INCREMENT :
      return{
        ...state, count: Number(action.payload.input1) + Number(action.payload.input2),
      }
      case DECREMENT :
        return{
          ...state, count:  Number(action.payload.input1) - Number(action.payload.input2),
        }
        case MULTIPLICATION :
        return{
          ...state, count:  Number(action.payload.input1) * Number(action.payload.input2),
        }
        case DIVISION :
        return{
          ...state, count:  Number(action.payload.input1) / Number(action.payload.input2),
        }
        default :
        return state;
  }

}
export default reducer