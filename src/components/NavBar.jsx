import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { Box, ButtonGroup, Typography } from '@material-ui/core'
import { SentimentVerySatisfied } from '@material-ui/icons'

const NavBar = () => {
	const history = useHistory()
	return (
		<Box
			display='flex'
			flexDirection='row'
			justifyContent='space-between'
			alignItems='center'
			margin='15px'
			position='fixed'
			width='95%'
			height='35px'
			border='1px solid black'
			borderRadius='12px'
			padding='10px'>
			<Box display='flex' alignItems='center' width='10%' justifyContent='space-between'>
				<SentimentVerySatisfied />
				<Typography>No siema!</Typography>
			</Box>
			<ButtonGroup marginRight='15px' variant='text'>
				<Button onClick={() => history.push('/')}>Strona główna</Button>
				<Button onClick={() => history.push('/aboutme')}>O mnie</Button>
				<Button onClick={() => history.push('/charlist')}>Lista postaci</Button>
				<Button onClick={() => history.push('/clicker')}>Licznik</Button>
				<Button onClick={() => history.push('/loginpage')}>Panel logowania</Button>
				<Button onClick={() => history.push('/stopwatch')}>Stoper</Button>
			</ButtonGroup>
		</Box>
	)
}

export default NavBar
