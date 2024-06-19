import {  useState } from "react";
// import { useEffect, useState } from "react";
function Day6Password() {
    const [show ,setShow]= useState(false);
    const [password , setPassword] = useState(false);
    function handleShowHide(){
        setShow(!show);
        setPassword(!password);
    };

    ////////
    // const [count, setCount] = useState(0);
    // const [value, setValue] = useState(1);
    // function handleCount() {
    //     setCount(count + 1);


    // };
    // function handleValue() {
    //     setValue(value + 3);


    // };
    // useEffect(() => {
    //     console.log("This is effect for count State ", count)
    // }, [count])
    // useEffect(() => {
    //     console.log("This is effect for value State ", value)
    // }, [value])

    ///
    // function handleCountEffect() {
    //     console.log("Hello g ", count)
    // }
    // function handleValueEffect() {
    //     console.log("Hello jhdsfjyef ", value)
    // }

    // useEffect(handleCountEffect, [count]);
    // useEffect(handleValueEffect, [value])






    return (
        <div>
            <h1>Show and hide Password </h1>
            <input type= {password ? "text": "password"} />
            <button onClick={handleShowHide}>
                {show ? "Hide": "Show"}

            </button>

            {/* ////// */}

            {/* <h1>Hello Everyone i am here</h1>
            <h2>Count : {count}</h2>
            <h2>Value : {value}</h2>
            <button onClick={handleCount}> increment</button>
            <button onClick={handleValue}> decrement</button> */}


        </div>
    )

}
export default Day6Password;
