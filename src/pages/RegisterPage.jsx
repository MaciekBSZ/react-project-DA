import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { addUser, correctEmail, correctName, correctLastName, resetCheck, correctPassword } from '../redux/toolkit/register'

const RegisterPage = () => {
	const [value, setValue] = useState({ name: null, lastName: null, email: null, password: null })
	const [registerError, setRegisterError] = useState({ name: false, lastName: false, email: false, password: false, usedEmail: false })
	const [emailHelperText, setEmailHelperText] = useState('')
	const dispatch = useDispatch()
	const emailDomains = useSelector(state => state.registers.registerEmailDomains)
	const registerCheck = useSelector(state => state.registers.registerCheck)
	const usersData = useSelector(state => state.registers.registerData)
	const regex = /^[A-Z-ĘÓĄŁŻŹĆŃ].*/
	const useStyles = makeStyles(theme => ({
		root: {
			'& .MuiTextField-root': {
				margin: theme.spacing(1),
				width: 200,
			},
		},
	}))

	const handleSubmit = e => {
		e.preventDefault()
		if (Object.values(registerCheck).every(i => i)) {
			dispatch(addUser(value))
			dispatch(resetCheck())
			e.target.reset()
			setValue({ name: null, lastName: null, email: null, password: null })
		} else {
			if (!registerCheck.name) {
				setRegisterError(prevRegisterError => {
					return { ...prevRegisterError, name: true }
				})
			}
			if (!registerCheck.lastName) {
				setRegisterError(prevRegisterError => {
					return { ...prevRegisterError, lastName: true }
				})
			}
			if (!registerCheck.email) {
				setRegisterError(prevRegisterError => {
					return { ...prevRegisterError, email: true }
				})
				setEmailHelperText('Podaj prawidłowy email')
			}
			if (!registerCheck.password) {
				setRegisterError(prevRegisterError => {
					return { ...prevRegisterError, password: true }
				})
			}
		}
	}
	const handleEmail = e => {
		if (e.target.value.length > 5 && emailDomains.some(i => e.target.value.includes(i)) && e.target.value.includes('@')) {
			for (let userData of usersData) {
				if (userData.email === e.target.value) {
					console.log(userData.email)
					dispatch(correctEmail(false))
					setEmailHelperText('email już istnieje')
					setRegisterError(prevRegisterError => {
						return { ...prevRegisterError, email: true }
					})
					return
				}
			}
			dispatch(correctEmail(true))
			setValue({ ...value, email: e.target.value })
			setEmailHelperText('')
			setRegisterError(prevRegisterError => {
				return { ...prevRegisterError, email: false }
			})
		} else {
			dispatch(correctEmail(false))
		}
	}

	const handleName = e => {
		if (e.target.value.length > 2 && regex.exec(e.target.value)) {
			setValue({ ...value, name: e.target.value })
			dispatch(correctName(true))
			setRegisterError(prevRegisterError => {
				return { ...prevRegisterError, name: false }
			})
		} else {
			dispatch(correctName(false))
		}
	}
	const handleLastName = e => {
		if (e.target.value.length > 2 && regex.exec(e.target.value)) {
			setValue({ ...value, lastName: e.target.value })
			dispatch(correctLastName(true))
			setRegisterError(prevRegisterError => {
				return { ...prevRegisterError, lastName: false }
			})
		} else {
			dispatch(correctLastName(false))
		}
	}
	const handlePassword = e => {
		if (e.target.value.length > 2) {
			setValue({ ...value, password: e.target.value })
			dispatch(correctPassword(true))
			setRegisterError(prevRegisterError => {
				return { ...prevRegisterError, password: false }
			})
		} else {
			dispatch(correctPassword(false))
		}
	}
	{
		const classes = useStyles()
		return (
			<form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete='off'>
				<div>
					<TextField
						error={registerError.name ? true : false}
						helperText={registerError.name ? 'Podaj prawidłowe imie' : ''}
						onChange={e => handleName(e)}
						required
						label='Imie'
						placeholder='Imie'
						variant='filled'
					/>
					<TextField
						error={registerError.lastName ? true : false}
						helperText={registerError.lastName ? 'Podaj prawidłowe nazwisko' : ''}
						onChange={e => handleLastName(e)}
						required
						label='Nazwisko'
						placeholder='Podaj nazwisko'
						variant='filled'
					/>
					<TextField error={registerError.email ? true : false} helperText={emailHelperText} onChange={e => handleEmail(e)} required label='email' placeholder='Podaj email' variant='filled' />
					<TextField
						error={registerError.password ? true : false}
						helperText={registerError.password ? 'Hasło za krótkie' : ''}
						onChange={e => handlePassword(e)}
						required
						id='text'
						label='Hasło'
						placeholder='Podaj hasło'
						type='password'
						variant='filled'
					/>
				</div>
				<Button type='submit'>Wyślij</Button>
			</form>
		)
	}
}

export default RegisterPage
