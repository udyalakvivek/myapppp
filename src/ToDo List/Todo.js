import React, { useState } from 'react'
import './Custom.css'
import TodoInput from '../Main/Content/TodoInput'
import TodoList from '../Main/Content/TodoList'

function Todo() {
    const [listTodo, setListTodo] = useState([])

    let addList = (inputText) => {
        if (inputText !== '')
            setListTodo([...listTodo, inputText])

    }

    const deleteItemList = (key) => {
        const newListTodo = [...listTodo];
        newListTodo.splice(key, 1)
        setListTodo([...newListTodo])
    };

    return (
        <>
            <div className='container-fluid bg-dark customCss text-white '>
                <h1 className='text-center py-4 text-decoration-underline'>Todo List</h1>
                <TodoInput addList={addList} />
                <hr />
                <div className='container-fluid col-sm-3 my-3'>

                    {listTodo.map((listItem, i) => {
                        return (
                            <TodoList key={i} index={i} item={listItem} deleteItem={deleteItemList} />
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Todo
