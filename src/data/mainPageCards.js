import InfoIcon from '@material-ui/icons/Info'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import AvTimerIcon from '@material-ui/icons/AvTimer'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import TimerIcon from '@material-ui/icons/Timer'
import DoneIcon from '@material-ui/icons/Done'

const mainPageCards = [
	{ id: 1, title: 'O mnie', path: '/aboutme', text: 'Strona z opisem', icon: <InfoIcon /> },
	{ id: 2, title: 'Lista Postaci', path: '/charlist', text: 'Lista postaci z kreskówki Rick and Morty', icon: <EmojiPeopleIcon /> },
	{ id: 3, title: 'Licznik', path: '/clicker', text: 'Prosty licznik', icon: <AvTimerIcon /> },
	{ id: 4, title: 'Strona logowania', path: '/loginpage', text: 'Strona logowania', icon: <ExitToAppIcon /> },
	{ id: 5, title: 'Stoper', path: '/stopwatch', text: 'Stoper', icon: <TimerIcon /> },
	{ id: 6, title: 'Rejestracja', path: '/registerpage', text: 'Strona rejestracji', icon: <DoneIcon /> },
]

export default mainPageCards
