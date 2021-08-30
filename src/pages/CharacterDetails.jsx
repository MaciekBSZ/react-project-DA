import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@material-ui/core'
import TypeWriterEffect from 'react-typewriter-effect'
import styled from 'styled-components'
import ErrorPage from './ErrorPage'
import Loader from '../components/Loader'
import CharacterDetailsBG from '../img/CharacterDetailsBG.jpg'
import useFetch from '../components/useFetch'
const Container = styled.div`
	position: relative;
	top: 15px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CharacterDetailsBG});
	background-size: cover;
	background-repeat: no-repeat;
	align-items: center;
	justify-content: center;
	box-shadow: 7px 8px 10px grey;
`
const CustomLink = styled(Link)`
	& {
		position: absolute;
		top: 5%;
		left: 2%;
		text-decoration: none;
		& Button {
			color: wheat;
			transition: background-color 0.5s, color 0.5s;
			&:hover {
				background-color: wheat;
				color: black;
			}
		}
	}
`
const CharacterDetails = () => {
	const { id, name } = useParams()
	const { data, isPending, error } = useFetch(`https://rickandmortyapi.com/api/character/${id}`)

	return (
		<>
			{data && (
				<Container>
					<CustomLink to={`/charlist/`}>
						<Button>Powrót do listy postaci</Button>
					</CustomLink>
					<TypeWriterEffect
						textStyle={{
							color: 'wheat',
							fontWeight: 500,
							fontSize: '1.5em',
						}}
						startDelay={2000}
						cursorColor='wheat'
						multiText={[
							`Imie: ${name}`,
							`Pochodzenie: ${data.origin.name}`,
							`Status: ${data.status.toLowerCase()}`,
							`Lokalizacja: ${data.location.name}`,
							`Płeć: ${data.gender.toLowerCase()}`,
							'Koniec transmisji...',
						]}
						multiTextDelay={2000}
						typeSpeed={50}
					/>
				</Container>
			)}
			{isPending && <Loader />}
			{error && <ErrorPage />}
		</>
	)
}

export default CharacterDetails
