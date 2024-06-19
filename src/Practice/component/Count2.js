import React from 'react'


function Count2(props) {
  return (
    <div>
      <h1 className='text-center '>I am Second Component </h1>
      <hr />
      <h2>The button was clicked {props.counter} times </h2>
      <br />

    </div>
  )
}

export default Count2
