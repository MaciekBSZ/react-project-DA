import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { Typography } from '@material-ui/core'
const LoginPage = () => {
	const [value, setValue] = useState({ email: null, password: null })
	const [loginError, setLoginError] = useState(false)
	const [passwordTip, setPasswordTip] = useState(false)
	const usersData = useSelector(state => state.registers.registerData)
	const history = useHistory()
	const useStyles = makeStyles(theme => ({
		root: {
			'& .MuiTextField-root': {
				margin: theme.spacing(1),
				width: 200,
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
		setPasswordTip(true)
		setValue({ ...value, password: e.target.value.toLowerCase() })
	}
	{
		const classes = useStyles()
		return (
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

				{loginError && <Typography>Błędny login lub hasło!</Typography>}
				<Button disabled={usersData.length === 0} type='submit'>
					Zaloguj się!
				</Button>
			</form>
		)
	}
}

export default LoginPage
