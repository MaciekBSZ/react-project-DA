import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import LoginBG from '../img/LoginBG.jpg'

const Container = styled.div`
	position: relative;
	top: 15px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${LoginBG});
	background-size: cover;
	background-repeat: no-repeat;
	align-items: center;
	justify-content: center;
	box-shadow: 7px 8px 10px grey;
`
const ErrorText = styled(Typography)`
	& {
		text-align: center;
		color: wheat;
	}
`

const LoginPage = () => {
	const [value, setValue] = useState({ email: null, password: null })
	const [loginError, setLoginError] = useState(false)
	const [passwordTip, setPasswordTip] = useState(false)
	const usersData = useSelector(state => state.registers.registerData)
	const history = useHistory()
	const useStyles = makeStyles(theme => ({
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			height: '200px',
			'& .MuiTextField-root': {
				margin: theme.spacing(1),
				width: 200,
				background: 'wheat',
			},
			'& .Mui-error': {
				background: '#900c3e',
				color: 'wheat',
			},
		},
	}))

	const handleSubmitLogin = e => {
		e.preventDefault()
		if (usersData.length !== 0) {
			for (let userData of usersData) {
				if (userData.email === value.email && userData.password === value.password) {
					e.target.reset()
					setLoginError(false)
					history.push({ pathname: '/userpanel', state: { name: userData.name, lastName: userData.lastName } })
				} else {
					setLoginError(true)
				}
			}
			return
		}
	}
	const handleEmailLogin = e => {
		setValue({ ...value, email: e.target.value })
	}

	const handlePasswordLogin = e => {
		if (e.target.value.length !== 0) {
			setPasswordTip(true)
			setValue({ ...value, password: e.target.value.toLowerCase() })
		} else {
			setPasswordTip(false)
		}
	}
	{
		const classes = useStyles()
		return (
			<Container>
				<form onSubmit={handleSubmitLogin} className={classes.root} noValidate autoComplete='off'>
					<div>
						<TextField disabled={usersData.length === 0} onChange={e => handleEmailLogin(e)} required label='email' placeholder='Podaj email' variant='filled' />
						<TextField
							disabled={usersData.length === 0}
							onChange={e => handlePasswordLogin(e)}
							required
							id='text'
							label='Hasło'
							placeholder='Podaj hasło'
							type='password'
							variant='filled'
							helperText={passwordTip && 'Wielkość liter nie ma znaczenia'}
						/>
					</div>

					{loginError && <ErrorText>Błędny login lub hasło!</ErrorText>}
					<Button variant='contained' disabled={usersData.length === 0} type='submit'>
						Zaloguj się!
					</Button>
				</form>
			</Container>
		)
	}
}

export default LoginPage
