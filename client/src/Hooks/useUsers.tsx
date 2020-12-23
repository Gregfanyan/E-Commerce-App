import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUsers } from '../redux/User/UserActions'
import { User } from '../types/UserType'
import { AppState } from '../types/'

export const useUsers = () => {
  const [userData, setUserData] = useState<User[]>([])
  const users = useSelector((state: AppState) => state.user.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    setUserData(users)
  }, [users])

  return [userData]
}
