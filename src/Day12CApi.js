// import React, { Component, createContext } from 'react'
// import User from './Main/Content/User'

// const myContext = createContext();

// class App extends Component {
//     state = {
//         name: "Vivek pandey",
//         age: "25",
//         address: "noida "
//     }
//     render() {
//         return (
//             <>
//                 <h3>This is main component</h3>
//                 <myContext.Provider value={this.state}>
//                     <User />
//                 </myContext.Provider>
//             </>
//         )
//     }
// }
// export default App
// export { myContext }


// import React, { useState, createContext } from 'react';
// import User from './Main/Content/User';


// const myContext = createContext();

// function App() {
//     const [userData, setUserData] = useState({
//         name: "Vivek Pandey",
//         age: "20",
//         address: "Noida",
//     });
//     function HandleUpdate() {
//         if (userData.name === "Vivek Pandey") {
//             setUserData({
//                 name: "Vivek",
//                 age: "22",
//                 address: "Delhi",
//             })
//         }
//         else {
//             setUserData({
//                 name: "Vivek Pandey",
//                 age: "20",
//                 address: "Noida",
//             })
//         }
//     }


//     return (
//         <>
//             <h3>This is the main component</h3>
//             <myContext.Provider value={userData}>
//                 <User />
//             </myContext.Provider>
//             <button onClick={HandleUpdate}>Update Value</button>
//         </>
//     );
// }

// export default App;
// export { myContext };


import React, { createContext } from 'react'
import User from './Main/Content/User'
const FirstName = createContext();
const LastName = createContext();



function Day12CApi() {
    return (
        <div>
            <h2>This is A Contaxt Api </h2>
            <FirstName.Provider value="Vivek JI">
                <LastName.Provider >
                    <User name=" this ia Ankita pandey " age={130} />
                </LastName.Provider>

            </FirstName.Provider>

        </div>
    )
}

export default Day12CApi
export { FirstName, LastName }


// 23 no. slide 