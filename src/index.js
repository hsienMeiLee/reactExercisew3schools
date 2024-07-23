import React from "react";
import ReactDOM from 'react-dom/client';


const cars = [];
function Garage(props){
    const cars = props.cars;
    return(
        <>
        {cars.length>0 && 
        <h2>You have {cars.length} cars</h2>
        }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Garage cars={cars}/>)