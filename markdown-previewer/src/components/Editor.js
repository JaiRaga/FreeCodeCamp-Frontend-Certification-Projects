import React, { useState } from "react";

import "./Editor.css";

const Editor = ({ previewCb }) => {
  const [text, setText] = useState("# Welcome\n## to \n### Markdown previewer");
  previewCb(text);

  const handleChange = event => {
    setText(event.target.value);
    previewCb(text);
  };

  return (
    <div>
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
