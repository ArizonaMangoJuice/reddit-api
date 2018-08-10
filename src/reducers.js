import { combineReducers } from 'redux'

function myData(state=[], action={}){
  return state;
}

const rootReducer = combineReducers({
  myData,
});

export default rootReducer;
