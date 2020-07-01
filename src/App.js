import React, { useState } from "react";
import marked from "marked";
import "./styles/main.css";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CodeIcon from "@material-ui/icons/Code";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import SimpleTabs from "./tabs.component";

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

    function TextArea() {
        return (
            <>
                <div className="format-bar">
                    <button onClick={header} className="header-font">
                        H
                    </button>
                    <button onClick={bold}>
                        <FormatBoldIcon />
                    </button>
                    <button onClick={italic}>
                        <FormatItalicIcon />
                    </button>
                    <button onClick={quote}>
                        <FormatQuoteIcon />
                    </button>
                    <button onClick={code}>
                        <CodeIcon />
                    </button>
                    <button onClick={link}>
                        <InsertLinkIcon />
                    </button>
                    <button onClick={bulletedList}>
                        <FormatListBulletedIcon />
                    </button>
                    <button onClick={numberedList}>
                        <FormatListNumberedIcon />
                    </button>
                    <button onClick={taskList}>
                        <CheckBoxOutlinedIcon />
                    </button>
                </div>
                <div className="textarea-div">
                    <textarea
                        rows="35"
                        className="input-textarea"
                        placeholder="Insert text"
                        onChange={handleChange}
                        value={text}
                    ></textarea>
                </div>
            </>
        );
    }

    function PreviewArea() {
        return (
            <div
                className="preview"
                dangerouslySetInnerHTML={{ __html: marked(text) }}
            ></div>
        );
    }

    return (
        <div className="App">
            <h1>Markdown Previewer</h1>

            <SimpleTabs
                write={TextArea}
                tab1={"Write"}
                preview={PreviewArea}
                tab2={"Preview"}
            />
        </div>
    );
}

export default App;
