import React, { Suspense , lazy } from 'react'
import Heading from './Heading'

const Content = lazy(()=>import("./Content"))


const App = () => {
  return (
   <>
   <Heading/>
   <Suspense fallback={<div>Loading....</div>}>
   <Content/>
   </Suspense>
   </>
  )
}

export default App