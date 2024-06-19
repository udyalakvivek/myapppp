// import React from 'react'
import Guest from './Main/Content/Guest'
// import User from './Main/Content/User'
import React, { Component } from 'react'

// function Day9CondiRendar() {

  
//         const isRegister = true;
//         if(isRegister){
//         return(
//         <>
//             <User />
//         </>
//         )
//       } else{
//         return(
//         <>
//             <Guest />
//         </>
//         )
//       }
   

// }
// export default Day9CondiRendar


// export default class Day9CondiRendar extends Component {
//   render() {
//     const isRegister= false;
//     if(isRegister)
//         return <User />
//         return <Guest />
    
//   }
// }

class Day9CondiRendar extends Component{
    rendar(){
        const isRegister = false;
        if(isRegister){
            return (
                <>
                {isRegister ? <user /> : <Guest />}
                </>
            )
        }
    }
}
export default Day9CondiRendar

