import React, { useState } from 'react'

function Main() {
    const [name, newName] = useState("Vivek")
    const [roll, rollNumber] = useState(11)
    const [add, newAdd] = useState("Gonda")
    const [cnt, newcnt] = useState("INDIA")
    function HandleName() {
        // newName("Stark")
        newName(name === "Vivek" ? "pandey" : "Vivek");

    }
    function HandleRoll() {
        // rollNumber(111)
        rollNumber(roll === 11 ? 111 : 11);
    }
    function HandleAdd() {
        // newAdd("Noida")
        newAdd(add === "Gonda" ? "Noida" : "Gonda");

    }
    function HandleCnt() {
        // newcnt("Bharat")
        newcnt(cnt === "INDIA" ? "Bharat" : "INDIA");
    }
    return (
        <div style={{ display: "flex", padding: "132px", gap: "30px" }}>
            <div className="div1">
                <h2>My Name : {name}</h2>
                <h2 className="text-danger">My RollNumber  : {roll}</h2>
                <button onClick={HandleName}> change Name</button>
                <button onClick={HandleRoll}> change Roll</button>
            </div>
            <div className="div2">
                <h2>My Address : {add}</h2>
                <h2>My Country  : {cnt}</h2>
                <button onClick={HandleAdd}> change Address</button>
                <button onClick={HandleCnt}> change Country</button>

            </div>
            <div className="div3">

            </div>
        </div>
    )
}
export default Main
