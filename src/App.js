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
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

function App() {
    const [text, setText] = useState("");
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabs = (event, newValue) => {
        setCurrentTab(newValue);
    };
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
                <div className="component-panel">
                    <button onClick={header}>H</button>
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
                        cols="40"
                        rows="10"
                        max
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
            <div className="input-textarea-container">
                <h3>Markdown text</h3>
                <div className="container-textarea"></div>
                <div>
                    <h3>Preview</h3>
                    <div
                        className="preview"
                        dangerouslySetInnerHTML={{ __html: marked(text) }}
                    ></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Omnis debitis totam similique ipsum, praesentium
                        expedita aperiam aliquam unde magnam quod.
                    </p>
                </div>
            </div>
        );
    }
    const pathMap = ["/", "/preview"];
    return (
        <div className="App">
            <h1>Markdown Previewer</h1>
            <BrowserRouter>
                <Paper className={classes.root}>
                    <Tabs value={currentTab} onChange={handleTabs}>
                        {" "}
                        {console.log(currentTab)}
                        <Tab label="Write" component={Link} to={pathMap[0]} />
                        <Tab label="Preview" component={Link} to={pathMap[1]} />
                    </Tabs>
                </Paper>
                <Switch>
                    <Route exact path={pathMap[0]} component={TextArea} />
                    <Route path={pathMap[1]} component={PreviewArea} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
