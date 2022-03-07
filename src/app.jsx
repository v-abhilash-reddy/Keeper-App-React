import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from './components/Note';
import Notes from "./notes";
import CreateArea from "./components/CreateArea";

function App(){
    const [notes,setNotes] = React.useState(Notes);
    var forKeys = notes.length+1;

    function noteSender(note){
        console.log(note);
        return (
            <Note key={note.key} note={note} onDelete={deleteNote}/>
            // <h1>ok</h1>
        );
    }

    function addNote(note){
        const tempNote = {...note, key:forKeys++}
        setNotes((prev)=>[...prev,tempNote]);
    }
    function deleteNote(key){
        setNotes((prev)=>{
            return prev.filter((item)=>item.key!==key);
        })
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            { notes.map(note=>noteSender(note)) }
            <Footer/>
        </div>
    );
}

export default App;