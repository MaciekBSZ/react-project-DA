import { CircularProgress } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
const LoaderIcon = styled(CircularProgress)`
	& {
		position: absolute;
		top: 37.5%;
		left: 37.5%;
		color: wheat;
	}
`

const Loader = () => {
	return <LoaderIcon size={400} />
}

export default Loader
