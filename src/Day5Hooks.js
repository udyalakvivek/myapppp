import React, { useState } from 'react'

export default function Day5Hooks() {
  const [count, setCount] = useState(0)
  function HandleAdd() {
    if (count >= 100) {
      alert("Counter is at Maximum Limit!");
      return;
    }

    setCount(count + 5)
  }
  function handleRem() {
    if (count === 0) {
      alert("Counter is already at Minimum Number!");
      return;
    }
    setCount(count - 5);

  }
  return (
    <div>
      <h2>Hello Event handling</h2>
      <h2> Value : {count}</h2>
      <button onClick={HandleAdd} disabled={count === 105}  > Click To Add </button>
      <button onClick={handleRem} disabled={count === -5}  > Click To Remove </button>
    </div>
  )
}
