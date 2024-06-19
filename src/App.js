// import React, { useState } from 'react'
// import User from './Main/Content/User'

// export default function App() {
//     const [name, setName] = useState({
//         name: "Vivek pandey",
//         age: "20",
//         address: "noida"

//     })
//     return (
//         <div>
//             <h3>{"Name :" + name.name}</h3>
//             <h3>{"Age :" + name.age}</h3>
//             <h3>{"Address :" + name.address}</h3>
//             <hr />
//             <User name={name.name} age={name.age} address={name.address} />
//         </div>
//     )
// }

// // const User2 = (props) => {
// //     return (
// //         <>
// //             <h2>{props.name}</h2>
// //             <h2>{props.age}</h2>
// //             <h2>{props.address}</h2>
// //         </>
// //     )

// // }

// class base function 


// import React, { Component } from 'react'
// import User from './Main/Content/User'


// class App extends Component {
//     state = {
//         name: "Vivek pandey",
//         age: "20",
//         address: "noida "
//     }
//     render() {
//         return (
//             <>
//                 <User
//                     name={this.state.name}
//                     age={this.state.age}
//                     address={this.state.address}
//                   />
//             </>
//         )
//     }
// }
// export default App

import React from 'react'
import Day12CApi from './Day12CApi'

export default function App() {
  return (
    <div>
      <h1>Hello Sir I am here For you </h1>
      <Day12CApi />
    </div>
  )
}






