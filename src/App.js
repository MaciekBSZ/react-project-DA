import React from 'react'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AboutMe from './pages/AboutMe'
import CharList from './pages/CharList'
import Clicker from './pages/Clicker'
import StopWatch from './pages/StopWatch'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'
import { createTheme, ThemeProvider } from '@material-ui/core'
import myInfo from './data/myInfo'
import './App.css'
import RegisterPage from './pages/RegisterPage'
const App = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#fefefe',
			},
			nav: {
				primary: 'wheat',
			},
		},
	})
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<div style={{ paddingTop: '6vh' }}>
				<Switch>
					<Route exact path='/' children={<MainPage />} />
					<Route path='/aboutme' children={<AboutMe myInfo={myInfo} />} />
					<Route path='/charlist' exact children={<CharList />} />
					<Route path='/clicker' children={<Clicker />} />
					<Route path='/loginpage' children={<LoginPage />} />
					<Route path='/stopwatch' children={<StopWatch />} />
					*/ Poniżej będzie rerouting ze strony z listą postaci do szczegółów poszczególnych postaci, ale to wkrótce. ;] */
					<Route path='charlist/:page/:status' children={<CharList />} />
					<Route path='/registerpage' children={<RegisterPage />} />
					<Route children={<ErrorPage />} />
				</Switch>
			</div>
		</ThemeProvider>
	)
}
export default App
