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
import './App.css'
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
					<Route path='/aboutme'>
						<AboutMe />
					</Route>
					<Route path='/charlist'>
						<CharList />
					</Route>
					<Route path='/clicker'>
						<Clicker />
					</Route>
					<Route path='/loginpage'>
						<LoginPage />
					</Route>
					<Route path='/stopwatch'>
						<StopWatch />
					</Route>
					<Route>
						<ErrorPage />
					</Route>
				</Switch>
			</div>
		</ThemeProvider>
	)
}
export default App
