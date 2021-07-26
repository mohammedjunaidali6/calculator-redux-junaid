import { addReducer,subReducer, ADD_KEY, SUB_KEY, MUL_KEY, mulReducer, DIV_KEY, divReducer } from "./addRedux/addReducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers ({
    [ADD_KEY]: addReducer,
    [SUB_KEY]: subReducer,
    // [MUL_KEY]: mulReducer,
    // [DIV_KEY]: divReducer,
    
})

export {rootReducer}