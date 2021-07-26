import { ADDITION, FETCH_ANS, SUBTRACTION, FETCH_S} from "./add.actionTypes";

let addition = (number)=>{
    return{
        type: ADDITION,
        payload: number
    }
}
let fetchAns = (number)=>{
    return{
        type: FETCH_ANS,
        payload: number
    }
}


let subTraction = (number)=>{
  return{
      type: SUBTRACTION,
      payload: number
  }
}
let fetchs = (number)=>{
  return{
      type: FETCH_S,
      payload: number
  }
}


// let multiplication = (number)=>{
//     return{
//         type: MULTIPLICATION,
//         payload: number
//     }
//   }
//   let fetchm = (number)=>{
//     return{
//         type: FETCH_M,
//         payload: number
//     }
//   }

//   let division = (number)=>{
//     return{
//         type: DIVISION,
//         payload: number
//     }
//   }
//   let fetchd = (number)=>{
//     return{
//         type: FETCH_D,
//         payload: number
//     }
//   }

export {addition,  fetchAns, subTraction, fetchs}