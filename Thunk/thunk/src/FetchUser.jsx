import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './slice'

const FetchUser = () => {
    const {users , isLoading , isError} = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    console.log(users)
    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])

    if(isLoading) return <h2>Loading....</h2>
    if(isError) return <h2>Something went Wrong</h2>

    
  return (
    <div>
        {users.map((ele)=>{
            return <>

            <div>
                <h2>{ele.id}</h2>
                <p>{ele.title}</p>
            </div>
            </>
        })}
    </div>
  )
}

export default FetchUser