import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../types/UserType'

function useUsers() {
	const dispatch = useDispatch()
	const user = useSelector((state: AppState) => state.user.user)
	const [data, setData] = useState(Array)
	console.log('users', user)

	return <div></div>
}

export default useUsers
