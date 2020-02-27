import React, { useState } from "react";

import "./Editor.css";

const Editor = ({ previewCb, displayPreviewCb }) => {
  const [text, setText] = useState(
    "# Welcome\n\r## to \n### Markdown previewer"
  );
  previewCb(text);

  const handleChange = event => {
    setText(event.target.value);
    previewCb(text);
  };

  const [] = useState();

  return (
    <div>
      <div className="heading">
        <h3>Editor</h3>
        <i className="fa fa-window-close editor-icon" size="2x" />
      </div>
      <textarea
        id="editor"
        rows="4"
        cols="50"
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Editor;
