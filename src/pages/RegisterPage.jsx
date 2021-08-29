import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { addUser, correctEmail, correctName, correctLastName, resetCheck, correctPassword } from '../redux/toolkit/register'
import styled from 'styled-components'
import RegisterPageBG from '../img/RegisterPageBG.jpg'

const Container = styled.div`
	position: relative;
	top: 15px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${RegisterPageBG});
	background-size: cover;
	background-repeat: no-repeat;
	align-items: center;
	justify-content: center;
	box-shadow: 7px 8px 10px grey;
`

const RegisterPage = () => {
	const [value, setValue] = useState({ name: null, lastName: null, email: null, password: null })
	const [registerError, setRegisterError] = useState({ wrongName: false, wrongLastName: false, wrongEmail: false, wrongPassword: false })
	const [emailHelperText, setEmailHelperText] = useState(null)
	const [passwordHelperText, setPasswordHelperText] = useState(null)
	const dispatch = useDispatch()
	const emailDomains = useSelector(state => state.registers.registerEmailDomains)
	const registerCheck = useSelector(state => state.registers.registerCheck)
	const usersData = useSelector(state => state.registers.registerData)
	const regex = /^[A-Z-ĘÓĄŁŻŹĆŃ].*/
	const regexNumer = /[0-9]/
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
				color: '#900c3e',
			},
		},
	}))

	const handleSubmit = e => {
		e.preventDefault()
		if (Object.values(registerCheck).every(i => i)) {
			dispatch(addUser(value))
			dispatch(resetCheck())
			e.target.reset()
		} else {
			if (!registerCheck.name) {
				setRegisterError(prevRegisterError => {
					return { ...prevRegisterError, wrongName: true }
				})
			}
			if (!registerCheck.lastName) {
				setRegisterError(prevRegisterError => {
					return { ...prevRegisterError, wrongLastName: true }
				})
			}
			if (!registerCheck.email) {
				setRegisterError(prevRegisterError => {
					return { ...prevRegisterError, wrongEmail: true }
				})
				setEmailHelperText('Podaj prawidłowy email')
			}
			if (!registerCheck.password) {
				setPasswordHelperText('Hasło powinno składać się z co najmniej 5 znaków')
			}
		}
	}
	const handleEmail = e => {
		if (e.target.value.length > 5 && emailDomains.some(i => e.target.value.includes(i)) && e.target.value.includes('@')) {
			for (let userData of usersData) {
				if (userData.email === e.target.value) {
					console.log(userData.email)
					dispatch(correctEmail(false))
					setEmailHelperText('Email już istnieje')
					setRegisterError(prevRegisterError => {
						return { ...prevRegisterError, wrongEmail: true }
					})
					return
				}
			}
			dispatch(correctEmail(true))
			setValue({ ...value, email: e.target.value })
			setEmailHelperText(null)
			setRegisterError(prevRegisterError => {
				return { ...prevRegisterError, wrongEmail: false }
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
				return { ...prevRegisterError, wrongName: false }
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
				return { ...prevRegisterError, wrongLastName: false }
			})
		} else {
			dispatch(correctLastName(false))
		}
	}
	const handlePassword = e => {
		if (e.target.value.length < 4 && !regexNumer.exec(e.target.value)) {
			setPasswordHelperText('Hasło za krótkie, oraz nie zawiera cyfr')
		} else if (e.target.value.length < 4) {
			setPasswordHelperText('Hasło za krótkie')
		} else if (!regexNumer.exec(e.target.value)) {
			setPasswordHelperText('Hasło nie zawiera cyfr')
		} else {
			if (e.target.value.length > 4) {
				setValue({ ...value, password: e.target.value.toLowerCase() })
				dispatch(correctPassword(true))
				setPasswordHelperText(null)
			} else {
				dispatch(correctPassword(false))
			}
		}
	}
	{
		const classes = useStyles()
		return (
			<Container>
				<form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete='off'>
					<div>
						<TextField
							error={registerError.wrongName && true}
							helperText={registerError.wrongName && 'Podaj prawidłowe imie'}
							onChange={e => handleName(e)}
							required
							label='Imie'
							placeholder='Podaj imie'
							variant='filled'
						/>
						<TextField
							error={registerError.wrongLastName && true}
							helperText={registerError.wrongLastName && 'Podaj prawidłowe nazwisko'}
							onChange={e => handleLastName(e)}
							required
							label='Nazwisko'
							placeholder='Podaj nazwisko'
							variant='filled'
						/>
						<TextField error={registerError.wrongEmail && true} helperText={emailHelperText} onChange={e => handleEmail(e)} required label='email' placeholder='Podaj email' variant='filled' />
						<TextField
							error={passwordHelperText && true}
							helperText={passwordHelperText}
							onChange={e => handlePassword(e)}
							required
							id='text'
							label='Hasło'
							placeholder='Podaj hasło'
							type='password'
							variant='filled'
						/>
					</div>
					<Button variant='contained' type='submit'>
						Zarejestruj się!
					</Button>
				</form>
			</Container>
		)
	}
}

export default RegisterPage
