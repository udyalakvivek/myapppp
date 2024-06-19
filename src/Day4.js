// import React from 'react'

// export default function Day4() {
//     let a ="vivek" ,b=89, c=222;
//   return (
//     <div>
//       <React.Fragment>
//         <h1>Hello world</h1>
//         <h1>Hello world</h1>
//         <h1>{a}</h1>
//         <h1>{b}</h1>
//         <h1>{c}</h1>
//         <div>
//             HEllo i am here to for you !
//         </div>
        
//       </React.Fragment>
//     </div>
//   )
// }


// export default function Day4() {
//     let a ="vivek" ,b=89, c=222;
//   return (
//     <>
//      
//         <h1>Hello world</h1>
//         <h1>Hello world</h1>
//         <h1>{a}</h1>
//         <h1>{b}</h1>
//         <h1>{c}</h1>
//         <div>
//             HEllo i am here to for you !
//         </div>
        
//      
//       </>
//   )
// }


// export default function Day4() {
//     let a ="vivek" ,b=89, c=222;
//   return (
//     <div>
     
//         <h1>Hello world</h1>
//         <h1>Hello world</h1>
//         <h1>{a}</h1>
//         <h1>{b}</h1>
//         <h1>{c}</h1>
//         <div>
//             HEllo i am here to for you !
//         </div>
        
      
//     </div>
//   )
// }




//////
import Student  from "./Student";
import Employee  from "./Student";
function Add(){
    let a = 10,b= 120;
    let res = a+b;
    return(
        <>
        <h1>This is Named function component </h1>
        <h1> Addition : {res}</h1>
        </>
    )
}

const Model = ()=>{
    let a = "vivek",b= 1582;
    let res = ` name :${a} , Model number : ${b}`
    return(
        <>
        <h1>This is Arrow function component </h1>
        <h1> Addition : {res}</h1>
        </>
    )
}

const Day4 =function(){
    let a = 10,b= 120;
    let sub = a-b;
    return(
        <>
        <Add />
        <Model/>
        <Student />
        <Employee />
        <h1>This is  function  As a anonnmous function </h1>
        <h1> Subtraction : ${sub}</h1>
        </>
    )
}
export default Day4;
