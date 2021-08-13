import { CircularProgress } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
const LoaderIcon = styled(CircularProgress)`
	& {
		position: absolute;
		top: 35%;
		left: 40%;
		color: wheat;
	}
`

const Loader = () => {
	return <LoaderIcon size={400} />
}

export default Loader
