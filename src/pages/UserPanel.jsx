import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import TypeWriterEffect from 'react-typewriter-effect'
import UserPanelBG from '../img/UserPanelBG.jpg'

const Box = styled.div`
	position: relative;
	top: 15px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${UserPanelBG});
	background-size: cover;
	background-repeat: no-repeat;
	align-items: center;
	justify-content: center;
	box-shadow: 7px 8px 10px grey;
	z-index: -1;
`

const UserPanel = () => {
	const location = useLocation()
	const { name, lastName } = location.state
	return (
		<Box>
			<TypeWriterEffect
				textStyle={{
					color: 'wheat',
					fontWeight: 500,
					fontSize: '1.5em',
				}}
				startDelay={2000}
				cursorColor='wheat'
				text={`Witaj ${name} ${lastName}!`}
				typeSpeed={50}
			/>
		</Box>
	)
}

export default UserPanel
