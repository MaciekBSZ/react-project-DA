import { combineReducers, createSlice } from '@reduxjs/toolkit'
import InfoIcon from '@material-ui/icons/Info'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import AvTimerIcon from '@material-ui/icons/AvTimer'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import TimerIcon from '@material-ui/icons/Timer'
import DoneIcon from '@material-ui/icons/Done'
import MainPage from '../../pages/MainPage'
import AboutMe from '../../pages/AboutMe'
import CharList from '../../pages/CharList'
import Clicker from '../../pages/Clicker'
import StopWatch from '../../pages/StopWatch'
import LoginPage from '../../pages/LoginPage'
import ErrorPage from '../../pages/ErrorPage'
import CharacterDetails from '../../pages/CharacterDetails'
import MyInfo from '../../data/myInfo'
import RegisterPage from '../../pages/RegisterPage'

const filtersSlice = createSlice({
	name: 'filterSlice',
	initialState: [
		{ id: 1, value: ``, title: 'Bez filtru' },
		{ id: 2, value: `&status=alive`, title: 'Żywy' },
		{ id: 3, value: `&status=dead`, title: 'Martwy' },
		{ id: 4, value: `&status=unknown`, title: 'Nieznany' },
	],
})
const mainPageCardsSlice = createSlice({
	name: 'mainPageCards',
	initialState: [
		{ id: 1, title: 'O mnie', path: '/aboutme', text: 'Strona z opisem', icon: <InfoIcon /> },
		{ id: 2, title: 'Lista Postaci', path: '/charlist', text: 'Lista postaci z kreskówki Rick and Morty', icon: <EmojiPeopleIcon /> },
		{ id: 3, title: 'Licznik', path: '/clicker', text: 'Prosty licznik', icon: <AvTimerIcon /> },
		{ id: 4, title: 'Strona logowania', path: '/loginpage', text: 'Strona logowania', icon: <ExitToAppIcon /> },
		{ id: 5, title: 'Stoper', path: '/stopwatch', text: 'Stoper', icon: <TimerIcon /> },
		{ id: 6, title: 'Rejestracja', path: '/registerpage', text: 'Strona rejestracji', icon: <DoneIcon /> },
	],
})
const navBarButtonsSlice = createSlice({
	name: 'navBarButtons',
	initialState: [
		{ id: 1, name: 'Strona główna', path: '/' },
		{ id: 2, name: 'O mnie', path: '/aboutme' },
		{ id: 3, name: 'Lista postaci', path: '/charlist' },
		{ id: 4, name: 'Licznik', path: '/clicker' },
		{ id: 5, name: 'Panel logowania', path: '/loginpage' },
		{ id: 6, name: 'Stoper', path: '/stopwatch' },
		{ id: 7, name: 'Strona rejestracji', path: '/registerpage' },
	],
})
const routingSlice = createSlice({
	name: 'routing',
	initialState: [
		{ id: 1, path: '/', exact: true, children: <MainPage /> },
		{ id: 1, path: '/aboutme', exact: null, children: <AboutMe myInfo={MyInfo} /> },
		{ id: 2, path: '/clicker', exact: null, children: <Clicker /> },
		{ id: 3, path: '/loginpage', exact: null, children: <LoginPage /> },
		{ id: 4, path: '/stopwatch', exact: null, children: <StopWatch /> },
		{ id: 5, path: '/charlist', exact: true, children: <CharList /> },
		{ id: 6, path: '/charlist/:name/:id', exact: true, children: <CharacterDetails /> },
		{ id: 7, path: '/registerpage', exact: null, children: <RegisterPage /> },
		{ id: 8, path: null, exact: null, children: <ErrorPage /> },
	],
})

const arraysReducer = combineReducers({
	routing: routingSlice.reducer,
	navBarButtons: navBarButtonsSlice.reducer,
	filters: filtersSlice.reducer,
	mainPageCards: mainPageCardsSlice.reducer,
})
export default arraysReducer
