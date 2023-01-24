import * as React from 'react'
import type { IValue } from '../models/services/value'
import { useGetAllValuesQuery } from '../services'

export default function Value() {
  const { currentData, isError, isLoading, isSuccess } = useGetAllValuesQuery('')
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