import React from "react";
import ReactDOM from 'react-dom/client';

function Car(props){
    return <h1>I am a {props.color} car</h1>
}
function Garage(){
    return(
        <>
        <h1>Who lives in my garage</h1>
        <Car/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('sandy'));

root.render(<Garage/>)