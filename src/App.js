import React, { useState } from "react";
import marked from "marked";
import "./styles/main.css";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatIndentIncreaseIcon from "@material-ui/icons/FormatIndentIncrease";
import CodeIcon from "@material-ui/icons/Code";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import SimpleTabs from "./tabs.component";
import Tooltip from "@material-ui/core/Tooltip";
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
                    <Tooltip title="Add header text" placement="top" arrow>
                        <button onClick={header} className="header-font">
                            H
                        </button>
                    </Tooltip>
                    <Tooltip title="Add bold text" placement="top" arrow>
                        <button onClick={bold}>
                            <FormatBoldIcon />
                        </button>
                    </Tooltip>
                    <Tooltip title="Add italic text" placement="top" arrow>
                        <button onClick={italic}>
                            <FormatItalicIcon />
                        </button>
                    </Tooltip>
                    <Tooltip title="Insert a quote" placement="top" arrow>
                        <button onClick={quote}>
                            <FormatIndentIncreaseIcon />
                        </button>
                    </Tooltip>
                    <Tooltip title="Insert code" placement="top" arrow>
                        <button onClick={code}>
                            <CodeIcon />
                        </button>
                    </Tooltip>
                    <Tooltip title="Add a link" placement="top" arrow>
                        <button onClick={link}>
                            <InsertLinkIcon />
                        </button>
                    </Tooltip>
                    <Tooltip title="Add a bulleted list" placement="top" arrow>
                        <button onClick={bulletedList}>
                            <FormatListBulletedIcon />
                        </button>
                    </Tooltip>
                    <Tooltip title="Add a numbered list" placement="top" arrow>
                        <button onClick={numberedList}>
                            <FormatListNumberedIcon />
                        </button>
                    </Tooltip>
                    <Tooltip title="Add a task list" placement="top" arrow>
                        <button onClick={taskList}>
                            <CheckBoxOutlinedIcon />
                        </button>
                    </Tooltip>
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
