import React from 'react'

export default function Student() {
    let name ="Alexa"
    let roll =6
    let address ="Gonda"
  return (
   <>
   <h1> Name : {name}</h1>
   <h1> roll : {roll}</h1>
   <h1> add : {address}</h1>
   </>
      
    
  )
}

export class Employee extends React.Component{
    render(){
        return(    
            <>
            <h1>This was me </h1>
            </>
        )
    }
}


