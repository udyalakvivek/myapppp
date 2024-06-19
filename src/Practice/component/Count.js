import React from 'react'
import Count2 from './Count2'


function Count(props) {
    return (
        <div>
            <h1 className='text-center '>I am first Component </h1>
            <hr />
            <h1>My name is Vivek  Pandey ant the Count is = {props.counter}</h1>
            <hr />
            <Count2 counter={props.counter} />
        </div>
    )
}

export default Count
