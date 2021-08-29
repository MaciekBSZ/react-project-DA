import MainPage from '../pages/MainPage'
import AboutMe from '../pages/AboutMe'
import CharList from '../pages/CharList'
import Clicker from '../pages/Clicker'
import StopWatch from '../pages/StopWatch'
import LoginPage from '../pages/LoginPage'
import ErrorPage from '../pages/ErrorPage'
import CharacterDetails from '../pages/CharacterDetails'
import UserPanel from '../pages/UserPanel'
import MyInfo from './../data/myInfo'
import RegisterPage from '../pages/RegisterPage'

const routing = [
	{ id: 1, path: '/', exact: true, children: <MainPage /> },
	{ id: 1, path: '/aboutme', exact: null, children: <AboutMe myInfo={MyInfo} /> },
	{ id: 2, path: '/clicker', exact: null, children: <Clicker /> },
	{ id: 3, path: '/loginpage', exact: null, children: <LoginPage /> },
	{ id: 4, path: '/stopwatch', exact: null, children: <StopWatch /> },
	{ id: 5, path: '/charlist', exact: true, children: <CharList /> },
	{ id: 6, path: '/charlist/:name/:id', exact: true, children: <CharacterDetails /> },
	{ id: 7, path: '/registerpage', exact: null, children: <RegisterPage /> },
	{ id: 9, path: '/userpanel', exact: null, children: <UserPanel /> },
	{ id: 8, path: null, exact: null, children: <ErrorPage /> },
]

export default routing
