import {createStore, applyMiddleware} from 'redux'
import thunkMiddleWare from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers'
import { composeWithDevTools } from "redux-devtools-extension";

const loggerMiddleWare = createLogger();

export default function configureStore(preloadedState){
return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleWare,
        loggerMiddleWare
      )
    )
  )
}

