import React from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is now in UPPER CASE", "Success");
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is now in lower case","Success");
    }
    //function for removing extra spaces
    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Extra Spaces Removed","Success");
    }
    //function for copying text to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard","Success");
    }
// function for speaking the written message
    const speak = () => {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 1.5 ;
        utterance.pitch = 1.5;
        speechSynthesis.speak(utterance);
        props.showAlert("Text is being spoken","Success");
    }
    // const [text, setText] = React.useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = React.useState('');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}></textarea>

            </div>
            <input type="text" value={text} onChange={handleOnChange} />
            <button className="btn btn-outline-success my-2 my-sm-0 mx-1" onClick={handleUpClick} >To Upper Case</button>
            <button className="btn btn-outline-success my-2 my-sm-0 mx-1" onClick={handleDownClick}>To Lower Case</button>
            <button className="btn btn-outline-success my-2 my-sm-0 mx-1" onClick={() => setText('') }>Clear</button>
            <button className="btn btn-outline-success my-2 my-sm-0 mx-1" onClick={speak}>Speak</button>
            <button className="btn btn-outline-success my-2 my-sm-0 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-outline-success my-2 my-sm-0 mx-1" onClick={handleCopy}>Copy</button>
            {/* <button onClick={handleUpClick}>UPPERCASE</button> */}
            <div className="continer">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length}  characters here</p>
                <p>Time required to read the whole content will be {0.008 * text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your text in the textBox and you will receive the preview"}</p>
            </div>
        </div>

    )
}