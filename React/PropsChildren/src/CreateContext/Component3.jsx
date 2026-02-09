import React, { useContext } from 'react'
import { userContext } from './context'

const Component3 = () => {
    const user = useContext(userContext)
    console.log(user)
  return (
    <div>The data which is come from component1 by using useContext = {user}</div>
  )
}

export default Component3