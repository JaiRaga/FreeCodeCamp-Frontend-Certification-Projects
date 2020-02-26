import React from "react";
import Markdown from "react-markdown";

import "./Preview.css";

const Preview = ({ rawText }) => {
  return (
    <div id="preview">
      <Markdown source={rawText} />
    </div>
  );
};

export default Preview;
