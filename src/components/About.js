import { useState } from "react";
import React from "react";

export default function About() {
    const [myStyle, myNewStyle] = useState({
        color: 'Black',
        backgroundColor: 'White',

    });
    const [btnText, setBtnText] = useState('Enable Dark  mode');
    // const [btnClass,setBtnClass] = useState('Enable dark mode');
    const toggleStyle = () => {
        if (myStyle.color === 'Black') {
            myNewStyle({
                color: 'White',
                backgroundColor: 'Black',
                border: '2px solid white'
            })
            setBtnText('Enable light mode');
        } else {
            myNewStyle({
                color: 'Black', 
                backgroundColor: 'white',
            })
            setBtnText('Enable Dark mode');
        }
    }
    return (
        <div className="container " style={myStyle}>
            <h1>About</h1>
            <p>
                This is a simple web application that will help you to write your own
                text and get a summary of it. You can also speak the text.
            </p>
            <p>
                This web application is developed by <strong>M Saqib Khan Niazi</strong>
            </p>
            <p>
                <strong>Version:</strong> 1.0
            </p>
            <p>
                <strong>Date:</strong> 2020-06-01
            </p>
            <p>
                <strong>License:</strong> Niazi Productions
            </p>
            <p>
                {/* <strong>Github:</strong> 
                <a href="
                //github.com/
                ">
                    github.com/
                </a> */}
            </p>
            <div className="card text-center" style={myStyle}>
                <div className="card-header">Featured</div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                        With supporting text below as a natural lead-in to additional
                        content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
            </div>

            <div>
                <button type="button" onClick={toggleStyle} className="btn btn-dark">{btnText}</button>
            </div>
        </div>
    );
}
// export default About;