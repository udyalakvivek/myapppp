import React from 'react'
import { myContext } from '../ApiContext'
import { useContext } from 'react'


function Count3() {
    const hello = useContext(myContext)

    return (
        <div>
            <h2>Hello i am  3rd component  i am using  Context Api in this component for transfer data </h2>
            <myContext.Consumer>
                {value => <h2>{hello}</h2>}
            </myContext.Consumer>

        </div>
    )
}

export default Count3
