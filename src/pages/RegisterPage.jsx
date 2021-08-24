import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { addUser, correctEmail } from '../redux/toolkit/register'

const RegisterPage = () => {
	const [value, setValue] = useState({ name: null, lastName: null, email: null, password: null })
	const dispatch = useDispatch()
	const emailDomains = useSelector(state => state.registers.registerEmailDomains)
	const emailFlag = useSelector(state => state.registers.registerError)

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addUser(value))
		dispatch(correctEmail(false))
	}
	const useStyles = makeStyles(theme => ({
		root: {
			'& .MuiTextField-root': {
				margin: theme.spacing(1),
				width: 200,
			},
		},
	}))
	const handleCheck = () => {
		console.log(Object.values(emailFlag).every(i => i === false))
	}
	const handleEmail = e => {
		console.log(emailFlag)
		if (e.target.value.length > 5 && emailDomains.some(v => e.target.value.includes(v))) {
			console.log(emailDomains)
			dispatch(correctEmail(true))
			setValue({ ...value, email: e.target.value })
		}
	}
	{
		const classes = useStyles()
		return (
			<form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete='off'>
				<div>
					<button onClick={handleCheck}>Ty robalu, kliknij</button>
					<TextField onChange={e => handleEmail(e)} required label='email' placeholder='Podaj email' variant='filled' />
					<TextField onChange={e => setValue({ ...value, lastName: e.target.value })} required label='Nazwisko' placeholder='Podaj nazwisko' variant='filled' />
					<TextField onChange={e => setValue({ ...value, email: e.target.value })} required label='name' placeholder='Imie' variant='filled' />
					<TextField onChange={e => setValue({ ...value, password: e.target.value })} required id='password' label='Hasło' placeholder='Podaj hasło' type='password' variant='filled' />
				</div>
				<Button type='submit'>Wyślij</Button>
			</form>
		)
	}
}

export default RegisterPage
