import React, { useState } from 'react';


function SetMotivation(props) {
    // console.log("This is props from the stMotivation component",props)


    

    function handleCHange(event) {
        event.preventDefault();
        // console.log("in the handlechange function")
        // console.log(event.target.value)
        props.setMotivation(event.target.value)
    }
    function handleSubmit() {
        // console.log("in the submit hadnbler")
        alert("Your motivation is "+  props.motivation)
    }
    // console.log("This is the movtivation state: ", props.motivation)
    return (
        <div>
            <input
                name="motivation"
                onChange={handleCHange}
                type="text"
                placeholder="Set your motivation..."
            />

            <button type="button" className="btn btn-outline-secondary" onClick={handleSubmit}>Set Motivation
            </ button >

        </div>
    )

};

export default SetMotivation;
