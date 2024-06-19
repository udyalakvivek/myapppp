// import React, { Component } from 'react'
// import Guest from './Guest'
// // import { myContext } from '../../Day12CApi'

// export default class User extends Component {
//   render() {
//     return (
//       <div>
//         <h2>This is user component</h2>
//         {/* <myContext.Consumer>
//           {value => <h1>{"Name :" + value.name + " Age :" + value.age}</h1>}
//         </myContext.Consumer> */}
//         <Guest />
//       </div>
//     )
//   }
// }


import React from 'react'
import { FirstName ,LastName } from '../../Day12CApi'
import { useContext } from 'react'

const User = () => {
  const Fname = useContext(FirstName);
  const Lname = useContext(LastName);
  return (
    <div>
      <h3>This is user </h3>
      <h3>{" Firstname =" + Fname}</h3>
      <h3>{" Lasr name =" + Lname}</h3>
    </div>
  )
}

export default User

