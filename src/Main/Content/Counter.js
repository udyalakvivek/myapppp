import React, { useReducer } from 'react'
const initialState = { count: 0 };
function reducer(state, action) {

    console.log("State : ", state, "Action :", action);

    switch (action.type) {
        case "decrementing":
            return { count: state.count - 1 };
        case "incrementing":
            return { count: state.count + 1 };
        default:
            return state;
    }
}


function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <button onClick={() => dispatch({ type: 'decrementing' })}>-</button>
            {state.count}
            <button onClick={() => dispatch({ type: 'incrementing' })}>+</button>
        </div>
    )
}

export default Counter
