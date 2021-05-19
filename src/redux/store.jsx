import { createStore,combineReducers,applyMiddleware } from "redux";
import personReducer from '../redux/reducers/personReducer'
import countReducer from '../redux/reducers/countReducer'
import thunk from 'redux-thunk'

const allReduers = combineReducers({
    count: countReducer,
    persons: personReducer
})

export default createStore(allReduers, applyMiddleware(thunk))