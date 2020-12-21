import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUsers } from '../redux/User/UserActions'
import { User } from '../types/UserType'
import { AppState } from '../types/'

const useUsers = () => {
  const [userData, setUserData] = useState<User[]>([])
  const users = useSelector((state: AppState) => state.user.users)
  console.log(users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
    setUserData(users)
  }, [dispatch, users])

  return [userData]
}

export default useUsers
