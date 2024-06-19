import React from 'react'
import { myContext } from '../../Day12CApi'

export default function Guest() {
  return (
    <div>
      <h2>Hello this is Guest Component</h2>
      <myContext.Consumer>
        {value => <h1>{"Name is = :" + value.name + " Age is =: " + value.age}</h1>}
      </myContext.Consumer>

    </div>
  )
}
