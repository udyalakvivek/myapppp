import React from 'react';

function TodoList(props) {

    return (
        <>
            <div>
                <li className='list-item'>
                    {props.item}
                    <span className='icons'>
                        <i className="fa-solid fa-trash" onClick={e => {
                            props.deleteItem(props.index)
                        }}></i>
                        {/* <i className="fa-solid fa-pen-to-square" id='secondI'></i> */}
                    </span>
                </li>
            </div>
        </>
    )
}

export default TodoList





// import React, { useState } from 'react';

// function TodoList(props) {
//     const [editMode, setEditMode] = useState(false);
//     const [editedText, setEditedText] = useState(props.item);

//     const handleEditClick = () => {
//         setEditMode(true);
//     };

//     const handleSaveClick = () => {
//         props.editItem(props.index, editedText);
//         setEditMode(false);
//     };

//     const handleCancelClick = () => {
//         setEditedText(props.item);
//         setEditMode(false);
//     };

//     const handleChange = (e) => {
//         setEditedText(e.target.value);
//     };

//     return (
//         <div>
//             {editMode ? (
//                 <li className='list-item'>
//                     <input
//                         type="text"
//                         value={editedText}
//                         onChange={handleChange}
//                     />
//                     <span className='icons'>
//                         <i className="fa-solid fa-check" onClick={handleSaveClick}></i>
//                         <i className="fa-solid fa-times" onClick={handleCancelClick}></i>
//                     </span>
//                 </li>
//             ) : (
//                 <li className='list-item'>
//                     {props.item}
//                     <span className='icons'>
//                         <i className="fa-solid fa-trash" onClick={() => props.deleteItem(props.index)}></i>
//                         <i className="fa-solid fa-pen-to-square" onClick={handleEditClick}></i>
//                     </span>
//                 </li>
//             )}
//         </div>
//     );
// }

// export default TodoList;

