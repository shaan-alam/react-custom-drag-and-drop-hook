import React, { useState } from "react";
import "./App.css";
import useDragAndDrop from "./hooks/useDragAndDrop";

function App() {
  const {
    dragOver,
    setDragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  } = useDragAndDrop();

  const [file, setFile] = useState<File>();

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    setDragOver(false);

    const selectedFile = e?.dataTransfer?.files[0];

    if (selectedFile.type.split("/")[0] !== "image") {
      return setFileDropError("Please provide an image file to upload!");
    }

    setFile(selectedFile);
    console.log(selectedFile);
  };

  const fileSelect = (e: any) => {
    let selectedFile = e?.dataTransfer?.files[0];

    if (selectedFile.type.split("/")[0] !== "image") {
      return setFileDropError("Please provide an image file to upload!");
    }

    setFileDropError("");
  };

  return (
    <div className="container">
      <form>
        {fileDropError && (
          <span className="file-drop-error">{fileDropError}</span>
        )}
        <label
          htmlFor="file"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          style={{ border: `${dragOver ? "3px dashed yellowgreen" : ""}` }}
        >
          {file && <h1>{file.name}</h1>}
          {!file && (
            <h1 style={{ color: `${dragOver ? " yellowgreen" : ""}` }}>
              {!dragOver ? "Select Or Drop your File here..." : "Drop here..."}
            </h1>
          )}
        </label>
        <input type="file" name="file" id="file" onChange={fileSelect} />
      </form>
      {file && (
        <div className="file-properties">
          <ul>
            <li>File Name - {file.name}</li>
            <li>File Type - {file.type}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
