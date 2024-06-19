// Ruls of use Hooks 
//   1. must be written inside function component.
//   2. must be import in component. 
//   3. must be call at the top level of component.
//   4. cannot be conditional.

import React, { useState } from 'react'
import Count from './component/Count'


function UsestateHook() {


    const [count, setCount] = useState(0)
    function updateCount() {
        setCount(count + 1)

    }
    return (
        <div>
            <h2 className='text-center'>Hello Everyone ! we are start to learning useState</h2>
            <br />
            <hr />

            <br />
            <h2>Button clicked {count} times </h2>
            <div className='text-center'>
                <button className='btn btn-dark ' onClick={updateCount}>
                    Click to
                </button>
            </div>
            <br />
            <hr />
            <Count counter={count} />



        </div >
    )
}

export default UsestateHook





