
import { ADDITION, FETCH_ANS, SUBTRACTION, FETCH_S, MULTIPLICATION, FETCH_M, DIVISION, FETCH_D  } from "./add.actionTypes";

export const ADD_KEY = 'addStore'
export const SUB_KEY = 'subStore'
// export const MUL_KEY = 'subStore'
// export const DIV_KEY = 'subStore'



let initialState = {
    num1:'',
    num2:'',
    ans:''
}

let addReducer = (state=initialState, action)=> {
    let {type, payload} = action
    switch(type){
        case ADDITION:
            return{
                ...state,
                ...payload
            }

            case FETCH_ANS:
                return{
                    ...state,
                    ...payload,
                    ans: parseFloat((+state.num1) + (+state.num2)).toFixed(2)
                }


               

                default : return state
    }
}
export {addReducer}

let subReducer = (state=initialState, action)=> {
  let {type, payload} = action
  switch(type){
    case SUBTRACTION:
      return{
          ...state,
          ...payload
      }

      case FETCH_S:
          return{
              ...state,
              ...payload,
              ans: parseFloat((-state.num1) - (-state.num2)).toFixed(2)
          }
          default : return state
  }
}
          
  export {subReducer}


//   let mulReducer = (state=initialState, action)=> {
//     let {type, payload} = action
//     switch(type){
//       case MULTIPLICATION:
//         return{
//             ...state,
//             ...payload
//         }
  
//         case FETCH_M:
//             return{
//                 ...state,
//                 ...payload,
//                 ans: parseFloat((+state.num1) * (+state.num2)).toFixed(2)
//             }
//             default : return state
//     }
//   }
            
//     export {mulReducer}
  
//     let divReducer = (state=initialState, action)=> {
//         let {type, payload} = action
//         switch(type){
//           case DIVISION:
//             return{
//                 ...state,
//                 ...payload
//             }
      
//             case FETCH_D:
//                 return{
//                     ...state,
//                     ...payload,
//                     ans: parseFloat((-state.num1) / (-state.num2)).toFixed(2)
//                 }
//                 default : return state
//         }
//       }
                
//         export {divReducer}
      