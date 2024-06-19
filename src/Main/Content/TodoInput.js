import React, {  useState } from 'react'

function TodoInput(props) {
    const [inputText, setInputText] = useState('')

    
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            props.addList(inputText)
            setInputText('')
        }
    }

    return (
        <div>
            <form  >
                <div className='row justify-content-center'>
                    <div className='mb-3 col-sm-6 '>
                        <input type="text" autoFocus placeholder='Your task' className='form-control ' value={inputText}
                            onChange={e => {
                                setInputText(e.target.value)
                                console.log("hello brother i am here")
                            }}
                            onKeyDown={handleEnter}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 ">
                        <button type='button' className="btn btn-primary" onClick={() => {
                            props.addList(inputText)
                            setInputText('')
                        }}>Add Task</button>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default TodoInput
