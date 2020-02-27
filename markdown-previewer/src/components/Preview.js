import React, { useState } from "react";
import Markdown from "react-markdown";

import "./Preview.css";

const Preview = ({ rawText }) => {
  const [height, setHeight] = useState("");

  const handleClick = () => {
    setHeight("100vh");
  };

  let style = {
    height: height
  };

  return (
    <div style={style}>
      <div className="heading-preview">
        <h3>Preview</h3>
        <i
          className="fa fa-window-close preview-icon"
          onClick={handleClick}
          size="2x"
        />
      </div>
      <div id="preview">
        <Markdown source={rawText} />
      </div>
    </div>
  );
};

export default Preview;
