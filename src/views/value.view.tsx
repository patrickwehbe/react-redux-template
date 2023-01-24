import * as React from 'react'
import type { IValue } from '../models/services/value'
import { useGetAllValuesQuery } from '../api'

export default function Value() {
  const { currentData, isError, isLoading, isSuccess, error } = useGetAllValuesQuery({
    pollingInterval: 0, // disable polling for this query
    refetchOnMountOrArgChange: true,
  })
   console.log("🚀 ~ file: value.view.tsx:10 ~ Value ~ error", error)
   console.log("🚀 ~ file: User.tsx:18 ~ User ~ currentData", currentData)

  return (
    <div className="value">
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : isSuccess && currentData ? (
        
        <>
          {currentData.data.map((value:IValue)=>
          <h3 key={value.id}>{value.name}</h3>
          )}
        </>
      ) : null}
     
    </div>
  )
}