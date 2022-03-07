import React from "react";

export default function Form(){
    const [fname,setFname] = React.useState("a");
    const [lname,setLname] = React.useState("b");
    const [full,setFull] = React.useState("ok");

    function handleChange(event){
        const temp1 = event.target.name;
        const temp2 = event.target.value;

        if(temp1 === "fname"){
            setFname(temp2);
        } else setLname(temp2);
    }

    function handleClick(event){
        console.log(event);
        setFull(fname + " " + lname);
        event.preventDefault();
    }

    return(
        <div>
            <h1>Hello {full}</h1>
            <form onSubmit={handleClick}>
                <input type="text" name="fname" onChange={handleChange} value={fname}/> 
                <br/>
                <input type="text" name="lname" onChange={handleChange} value={lname}/> 
                <button type="reset">Reset</button>
                <button>Submit</button>  
            </form>
        </div>
    );
}