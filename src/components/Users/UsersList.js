import React from 'react'

import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = ({ users }) => {
	const renderData = () => {
		return (
			<Card cssClass={classes.users}>
				<ul>{renderList}</ul>
			</Card>
		)
	}

	const renderList = users.map((user) => {
		return (
			<li key={Math.random()}>
				{user.username} ({user.age} years old)
			</li>
		)
	})

	return <div>{renderData()}</div>
}

export default UsersList
