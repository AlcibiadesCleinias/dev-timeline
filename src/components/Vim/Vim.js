import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./index.css";
import { solarizedDark } from "react-syntax-highlighter/src/styles/hljs";

const VimTextBox = ({ content, language = "javascript" }) => {
  return (
    <div className="vim-container">
      <div className="vim-box">
        <CopyToClipboard text={content}>
          <button className="copy-button">Copy</button>
        </CopyToClipboard>
        <SyntaxHighlighter language={language} style={solarizedDark}>
          {content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default VimTextBox;
