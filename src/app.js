import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Chat from './chat'

// ==================================
const userState = ['@john123', '@alex1987', 'chris']
const reducer = (state = userState, action) => {
	
	if(action.type=== 'ADD_NEW_USER') {
		console.log('action', action);
		return state.concat(action.username)
	}
	return state
}

const store = createStore(reducer)
window.store = store
// store.subscribe(() => {
// 	console.info('store has been changed!');

// })
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