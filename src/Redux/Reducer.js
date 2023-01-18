import {combineReducers} from 'redux';

const pageNum=1;

const pageNumChanger=(state=pageNum,action)=>{
    if(action.type==="CHANGE"){
        return state=action.payload
    }
    return state;

}
export const Reducer=combineReducers({pageNumChanger})