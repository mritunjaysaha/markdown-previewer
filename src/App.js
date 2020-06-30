import React, { useState } from "react";
function App() {
    const [text, setText] = useState();
    function handleChange(e) {
        setText(e.target.value);
    }
    return (
        <div className="App">
            <h1>Markdown Previewer</h1>

            <div className="container-textarea">
                <div className="input-textarea-container">
                    <h3>Markdown text</h3>
                    <textarea
                        cols="30"
                        rows="10"
                        className="input-textarea"
                        placeholder="Insert text"
                        onChange={handleChange}
                        value={text}
                    ></textarea>
                </div>
                <div className="preview">
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default App;
