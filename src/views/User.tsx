import * as React from 'react'
import { useGetUserByNameQuery } from '../hooks/user.hooks'

export default function User() {
  const { data, isError, isLoading } = useGetUserByNameQuery('patrick')

  return (
    <div className="user">
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.name}</h3>
        </>
      ) : null}
    </div>
  )
}