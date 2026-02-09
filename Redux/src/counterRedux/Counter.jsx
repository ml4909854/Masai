import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './counterAction'

const Counter = () => {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
   
  return (

    <>
    <h1>{state}</h1>
    <button onClick={()=>dispatch(Increment())}>Increment</button>
    <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    </>
    
  )
}

export default Counter