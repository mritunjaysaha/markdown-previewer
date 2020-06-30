import React, { useState } from "react";
import marked from "marked";
function App() {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function header(e) {
        e.preventDefault();
        setText(text + "### ");
    }

    return (
        <div className="App">
            <h1>Markdown Previewer</h1>

            <div className="container-textarea">
                <div className="input-textarea-container">
                    <h3>Markdown text</h3>
                    <div className="component-panel">
                        <button onClick={header}>Header</button>
                        <button>Bold</button>
                        <button>Italic</button>
                        <button>insert a quote</button>
                        <button>insert code</button>
                        <button>insert link</button>
                        <button>Add a bulleted list</button>
                        <button>Add a numbered list</button>
                        <button>Add a task list</button>
                    </div>
                    <textarea
                        cols="30"
                        rows="10"
                        className="input-textarea"
                        placeholder="Insert text"
                        onChange={handleChange}
                        value={text}
                    ></textarea>
                </div>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: marked(text) }}
                ></div>
            </div>
        </div>
    );
}

export default App;
