import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from './index'
import type { RootState } from '../redux/store'
import {
  fetchUserByName,
  selectStatusByName,
  selectDataByName,
} from '../services/user.slice'

export function useGetUserByNameQuery(name: string) {
  const dispatch = useAppDispatch()
  // select the current status from the store state for the provided name
  const status = useSelector((state: RootState) =>
    selectStatusByName(state, name)
  )
  // select the current data from the store state for the provided name
  const data = useSelector((state: RootState) => selectDataByName(state, name))
  useEffect(() => {
    // upon mount or name change, if status is uninitialized, send a request
    // for the user name
    if (status === undefined) {
      dispatch(fetchUserByName(name))
    }
  }, [status, name, dispatch])

  // derive status booleans for ease of use
  const isUninitialized = status === undefined
  const isLoading = status === 'pending' || status === undefined
  const isError = status === 'rejected'
  const isSuccess = status === 'fulfilled'

  // return the import data for the caller of the hook to use
  return { data, isUninitialized, isLoading, isError, isSuccess }
}