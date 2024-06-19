import React, { createContext, useState } from 'react'
import Count3 from './component/Count3'
const myContext = createContext()


function ApiContext() {

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
            <myContext.Provider value={count}>
                <Count3 />
            </myContext.Provider>

        </div >
    )
}

export default ApiContext
export {myContext}