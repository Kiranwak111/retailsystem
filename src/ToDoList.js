import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const ToDoList = (props) => {

    const [line, setline] = useState(false);

    const lineThrough = () => {
        setline(true)
    }

    return (
        <>
            <div className='todo_style'>
                <DeleteOutlineIcon className='fa-trash' style={{ fontSize: 'small' }} onClick={lineThrough}>
                </DeleteOutlineIcon>
                <li style={{ textDecoration: line ? 'line-through' : 'none' }}> {props.text} </li>
            </div>
        </>
    )
};

export default ToDoList;