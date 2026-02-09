import React from 'react'

function Son(props){
  return <>
    <h1>Son</h1>
    
    <div>{props.children}</div>
  </>
}

function Daughter(props){
  return<>
     <h1>Daughter</h1>
     <div>{props.children}</div>
  </>
}

const Parent = () => {
  return (
    <>
    <div>
       Showing this content to the parent using props.children
    </div>
    
    <div>
      <Son>
        <p>Hey! I a content of the Son This contnenct using by props</p>
      </Son>
      <Daughter>
        <p>
          Here is the contnent of daugther this content using by props
        </p>
      </Daughter>
    </div>
    </>
  
  )
}

export default Parent