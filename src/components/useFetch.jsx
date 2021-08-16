import { useEffect, useState } from 'react'
// W myśl zasady DRY, czyli dont repeat yourself, na podstawie jednej z lekcji stworzyłem custom hooka, któego będe wykorszystywał w 2 miejscach.
const useFetch = url => {
	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(true)
	useEffect(() => {
		async function getData() {
			try {
				setIsPending(false)
				const res = await fetch(url)
				const data = await res.json()
				setData(data)
			} catch (err) {
				setIsPending(true)
				alert(err)
				console.log(err)
			}
		}
		getData()
	}, [url])
	return { data, isPending, setData, setIsPending }
}

export default useFetch
