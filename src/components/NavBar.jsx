import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, ButtonGroup, Typography, makeStyles, Button } from '@material-ui/core'
import { SentimentVerySatisfied } from '@material-ui/icons'
const useStyles = makeStyles({
	root: {
		transition: '0.5s',
	},
})
const NavBar = () => {
	const classes = useStyles()
	const history = useHistory()
	const [bgColor, setBgColor] = useState('')
	const handleScroll = bgColor => {
		if (bgColor !== 'nav.primary' && window.pageYOffset >= 100) {
			setBgColor('nav.primary')
		} else if (bgColor === 'nav.primary' && window.pageYOffset < 100) {
			setBgColor('')
		}
	}
	useEffect(() => {
		window.onscroll = () => handleScroll(bgColor)
	}, [bgColor])
	return (
		<Box
			className={classes.root}
			bgcolor={bgColor}
			zIndex='1'
			position='fixed'
			display='flex'
			flexDirection='row'
			justifyContent='space-between'
			alignItems='center'
			boxShadow='7px 8px 10px grey'
			marginTop='10px'
			width='96%'
			padding='10px'
			height='5vh'
			border='1px solid black'
			borderRadius='12px'>
			<Box display='flex' alignItems='center' width='10%' justifyContent='space-between'>
				<SentimentVerySatisfied />
				<Typography>No siema!</Typography>
			</Box>
			<ButtonGroup variant='text'>
				<Button onClick={() => history.push('/')}>Strona główna</Button>
				<Button onClick={() => history.push('/aboutme')}>O mnie</Button>
				<Button onClick={() => history.push('/charlist')}>Lista postaci</Button>
				<Button onClick={() => history.push('/clicker')}>Licznik</Button>
				<Button onClick={() => history.push('/loginpage')}>Panel logowania</Button>
				<Button onClick={() => history.push('/stopwatch')}>Stoper</Button>
				<Button onClick={() => history.push('/registerpage')}>Strona rejestracji</Button>
			</ButtonGroup>
		</Box>
	)
}

export default NavBar
