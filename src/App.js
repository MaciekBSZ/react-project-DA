import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import { useSelector } from 'react-redux'
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
	const routLinks = useSelector(state => state.arrays.routing).map(({ id, children, exact, path }) => <Route key={id} path={path} exact={exact} children={children} />)
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<div style={{ paddingTop: '6vh' }}>
				<Switch>{routLinks}</Switch>
			</div>
		</ThemeProvider>
	)
}
export default App
