import React, { Suspense , lazy } from 'react'
import Heading from './Heading'
import CreateContext from './CreateContext/CreateContext'

const Content = lazy(()=>import("./Content"))


const App = () => {
  return (
   <>
   {/* <Heading/>
   <Suspense fallback={<div>Loading....</div>}>
   <Content/>
   </Suspense> */}
  <CreateContext/>
   </>
  )
}

export default App