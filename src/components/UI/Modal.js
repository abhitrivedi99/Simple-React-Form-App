import React from 'react'

import Card from './Card'
import Button from './Button'
import classes from './Modal.module.css'

const Modal = ({ title, message, onConfirm }) => {
	return (
		<div>
			<div className={classes.backdrop} onClick={onConfirm} />

			<Card cssClass={classes.modal}>
				<header className={classes.header}>
					<h2>{title}</h2>
				</header>
				<div className={classes.content}>
					<p>{message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={onConfirm}>Okay</Button>
				</footer>
			</Card>
		</div>
	)
}

export default Modal
