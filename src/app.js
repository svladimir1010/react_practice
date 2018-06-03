import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Chat from './chat'
import rootReducer from './reducers'
import { addNewUser } from './actions'

// ==================================

const loggerMiddleware = (store) => {
	return function (next) {
		return function (action) {
			console.log('trigger', action)
			let result = next(action)
			console.log('store after action', store.getState())
			return result
		}
	}
}   

// const checkUserMW = store => next => action => {
// 	console.log('ollooo');
// 	if (action.type === 'CONNECTED_NEW_USER') {
// 		let fakeRequest = () => new Promise(resolve => {
// 			setTimeout(() => {
// 				resolve()
// 				console.log('hi')
// 			}, 2500)
// 		})

// 		fakeRequest().then(() => {
// 			console.log('hello');
// 			store.dispatch(addNewUser())
// 		})
// 	}
// 	return next(action)
// }

const store = createStore(
	rootReducer,
	applyMiddleware(loggerMiddleware)
)

window.store = store
// ==================================
export default class App extends Component {
	render() {
		return (
			<Provider store={store} >
				<div>
					<Chat />
				</div>
			</Provider>
		);
	}
}  