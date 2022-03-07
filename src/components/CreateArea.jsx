import React from "react";

export default function CreateArea(props){
    const [note,setNote] = React.useState({title : "", content :""});

    function handleChange(event){
        const {name,value} = event.target;
        setNote((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleClick(event){
        props.onAdd(note);
        setNote({title : "", content :""});
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleClick} >
                <input type="text" name="title" onChange={handleChange} placeholder="Note Title.." value={note.title}/>
                <hr />
                <textarea name="content" id="" cols="30" rows="10" onChange={handleChange} placeholder="Note Content..." value={note.content}/>
                <button>Add</button>
            </form>
        </div>
    );
}