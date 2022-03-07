import React from "react";

function Note(props){
    const note = props.note;

    function handleSubmit(event){
        props.onDelete(note.key);
    }

    return (
        <div  className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            {/* <p>{note.key}</p> */}
            <button onClick={handleSubmit}>
                <img src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png" alt="oops"/>
            </button>
        </div>
    );
}

export default Note;