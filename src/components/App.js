import React, { useState } from 'react'

import AddUser from './Users/AddUser'
import UsersList from './Users/UsersList'

const App = () => {
	const [usersList, setUsersList] = useState([])

	const onAddUser = (data) => {
		setUsersList((prevState) => [...prevState, data])
	}

	return (
		<div>
			<AddUser onAddUser={onAddUser} />
			<UsersList users={usersList} />
		</div>
	)
}

export default App
