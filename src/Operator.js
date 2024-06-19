import React, { useState } from 'react'
// import styles from './App.css'
import './App.css';

export default function Operator() {
    const [add, setAdd] = useState(0)
    const [sub, setSub] = useState(0)
    const [mul, setMul] = useState(1)
    const [div, setDiv] = useState(6532845)
    function HandleAdd() {
        setAdd(add + 10)
    }
    function HandleSub() {
        setSub(sub - 5)
    }

    function HandleMul() {
        setMul(mul * 3)
    }

    function HandleDiv() {
        setDiv(div / 2)
    }


    return (
        <div>
            <h1>Hello Operator function </h1>
            <hr />
            <h2>Addintion : {add}</h2>
            <h2>Substraction : {sub}</h2>
            <h2>Multiplecation : {mul}</h2>
            <h2>Divide : {div}</h2>

            <button onClick={HandleAdd}>+</button>
            <button onClick={HandleSub}>-</button>
            <button onClick={HandleMul}>*</button>
            <button onClick={HandleDiv}>/</button>
        </div>
    )
}
