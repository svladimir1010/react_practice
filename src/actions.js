import faker from 'faker'

export const addNewUser = () => {
	const username = `@${faker.internet.userName().toUpperCase()}` 
	return {
		type: 'ADD_NEW_USER',
		username
	}
}

export const newMessage = (author, text, datetime) => {
	return {
		type: 'ADD_NEW_MESSAGE',
		author, text, datetime
	}
} 