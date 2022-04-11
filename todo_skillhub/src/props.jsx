import React from 'react'

export const Props = () => {
    let state = {
        name:"naveed",
        age:22,
        gender:"male"
    }
  return (
      <>
    <div>{state.name}</div>
    <div>{state.age}</div>
    <div>{state.gender}</div>
    </>
  )
}
