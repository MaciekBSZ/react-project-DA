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
import MyInfo from './components/MyInfo'
import './App.css'
import RegisterPage from './pages/RegisterPage'
const App = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#fefefe',
			},
		},
	})
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<div style={{ paddingTop: '6vh' }}>
				<Switch>
					<Route exact path='/'>
						<MainPage />
					</Route>
					<Route path='/aboutme' children={<AboutMe MyInfo={MyInfo} />}/ >
					<Route path='/charlist' children={<CharList />} />
					<Route path='/clicker' children={<Clicker />}/> 
					<Route path='/loginpage' children={<LoginPage />} />
					<Route path='/stopwatch' children={	<StopWatch />}/ >
					<Route path='/registerpage' children={<RegisterPage />} />
					<Route children={ <ErrorPage />} />
				</Switch>
			</div>
		</ThemeProvider>
	)
}
export default App
