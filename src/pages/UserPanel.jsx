import React from 'react'
import { Typography } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
const UserPanel = () => {
	const location = useLocation()
	const { name, lastName } = location.state
	return (
		<Typography>
			Witaj {name} {lastName}!
		</Typography>
	)
}

export default UserPanel
