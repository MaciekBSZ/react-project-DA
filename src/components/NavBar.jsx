import React from 'react'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
	const history = useHistory()
	return (
		<>
			<button onClick={() => history.push('/')}>Strona główna</button>
			<button onClick={() => history.push('/aboutme')}>O mnie</button>
			<button onClick={() => history.push('/charlist')}>Lista postaci</button>
			<button onClick={() => history.push('/clicker')}>Licznika</button>
			<button onClick={() => history.push('/loginpage')}>Panel logowania</button>
			<button onClick={() => history.push('/stopwatch')}>Stoper</button>
		</>
	)
}

export default NavBar
