import { combineReducers } from 'redux'

const usersState = ['@john123', '@alex1987', 'chris']
const messagesState = [
	{
		text: 'Hello World!',
		datetime: 1527871461436,
		author: '@alex1987'
	},
	{
		text: 'Hi Alex!!!',
		datetime: 1527871561436,
		author: 'chris'
	}
]

const usersReducer = (state = usersState, action) => {
	if (action.type === 'ADD_NEW_USER') {
		return state.concat(action.username)
	}
	return state
}

const messagesReducer = (state = messagesState, action) => {
	if(action.type === 'ADD_NEW_MESSAGE') {
		return state.concat({
			text: action.text,
			datetime: action.datetime,
			author: action.author
		})
	}
	return state
}

export default combineReducers ({
	usersReducer,
	messagesReducer
})