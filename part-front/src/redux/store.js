import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import users from './reducers/adminReducer'

const reduceer = combineReducers({
   users
})


const store = createStore(reduceer, applyMiddleware(thunk) );

export default store;