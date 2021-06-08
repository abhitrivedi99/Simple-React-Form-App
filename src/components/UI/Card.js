import React from 'react'

import classes from './Card.module.css'

const Card = ({ children, cssClass }) => {
	return <div className={`${classes.card} ${cssClass}`}>{children}</div>
}

export default Card
