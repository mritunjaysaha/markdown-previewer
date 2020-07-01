import React, { useState } from "react";
import marked from "marked";
import TextField from "@material-ui/core/TextField";

function App() {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function header(e) {
        e.preventDefault();
        if (text === "") {
            setText(text + "### ");
        } else {
            setText(text + "\n\n### ");
        }
    }

    function bold(e) {
        e.preventDefault();
        if (text === "") {
            setText(text + "**Enter text here** ");
        } else {
            setText(text + "\n\n**Enter text here** ");
        }
    }

    function italic(e) {
        e.preventDefault();
        if (text === "") {
            setText(text + "_Enter text here_ ");
        } else {
            setText(text + "\n\n_Enter text here_ ");
        }
    }
    function quote(e) {
        e.preventDefault();
        if (text === "") {
            setText(text + "> ");
        } else {
            setText(text + "\n\n> ");
        }
    }
    function code(e) {
        e.preventDefault();
        if (text === "") {
            setText(text + "`Enter text here` ");
        } else {
            setText(text + "\n\n`Enter text here` ");
        }
    }
    function link(e) {
        e.preventDefault();
        if (text === "") {
            setText(text + "[](url) ");
        } else {
            setText(text + "\n\n[](url) ");
        }
    }

    function bulletedList(e) {
        e.preventDefault();
        if (text === "") {
            setText(text + "-");
        } else {
            setText(text + "\n\n- ");
        }
    }

    function numberedList(e) {
        e.preventDefault();
        if (text === "") {
            setText(text + "1. ");
        } else {
            setText(text + "\n\n1. ");
        }
    }

    function taskList(e) {
        e.preventDefault();
        if (text === "") {
            setText(text + "- [ ] ");
        } else {
            setText(text + "\n\n- [ ] ");
        }
    }

    return (
        <div className="App">
            <h1>Markdown Previewer</h1>

            <div className="container-textarea">
                <div className="input-textarea-container">
                    <h3>Markdown text</h3>
                    <div className="component-panel">
                        <button onClick={header}>Header</button>
                        <button onClick={bold}>Bold</button>
                        <button onClick={italic}>Italic</button>
                        <button onClick={quote}>insert a quote</button>
                        <button onClick={code}>insert code</button>
                        <button onClick={link}>insert link</button>
                        <button onClick={bulletedList}>
                            Add a bulleted list
                        </button>
                        <button onClick={numberedList}>
                            Add a numbered list
                        </button>
                        <button onClick={taskList}>Add a task list</button>
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
