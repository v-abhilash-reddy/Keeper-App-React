import React from "react";

function Time(){
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());

    function setting(){
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(setting,1000);
    return (
        <div>
            <h1>{time}</h1>
            {/* <button onClick={setting}>Current Time</button> */}
        </div>
    );
}

export default Time;