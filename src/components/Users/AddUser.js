import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import Modal from '../UI/Modal'

import classes from './AddUser.module.css'

const AddUser = ({ onAddUser }) => {
	const [username, serUsername] = useState('')
	const [age, setAge] = useState('')
	const [error, setError] = useState()

	const onClick = (event) => {
		event.preventDefault()

		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name and age (non-empty values)',
			})
			return
		}
		if (+age < 1) {
			setError({
				title: 'Invalid Age',
				message: 'Please enter a valid age (> 0)',
			})
			setAge('')
			return
		}

		onAddUser({ username, age })
		setAge('')
		serUsername('')
	}

	const renderError = () => {
		return error ? (
			<Modal
				title={error.title}
				message={error.message}
				onConfirm={() => setError(null)}
			/>
		) : (
			<></>
		)
	}

	return (
		<>
			{renderError()}
			{/* {error && <Modal title={error.title} message={error.message} />} */}
			<Card cssClass={classes.input}>
				<form onSubmit={onClick}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={username}
						onChange={(e) => serUsername(e.target.value)}
					/>

					<label htmlFor="age">Age(Years)</label>
					<input
						id="age"
						type="number"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>

					<Button type="submit">Submit</Button>
				</form>
			</Card>
		</>
	)
}

export default AddUser
