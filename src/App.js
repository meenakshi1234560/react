import React, { useState } from 'react';
import './App.css';

function App() {
  const [textFile, setTextFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [textFileContent, setTextFileContent] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile.type.startsWith('text')) {
      setTextFile(droppedFile);
      readTextFile(droppedFile);
    } else if (droppedFile.type.startsWith('image')) {
      setImageFile(droppedFile);
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile.type.startsWith('text')) {
      setTextFile(uploadedFile);
      readTextFile(uploadedFile);
    } else if (uploadedFile.type.startsWith('image')) {
      setImageFile(uploadedFile);
    }
  };

  const readTextFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setTextFileContent(event.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <div className="App">
      <div className="left-section">
        <header className="App-header">
          <h1>Drag and Drop Example</h1>
          <input type="file" onChange={handleFileChange} />
          {textFile && (
            <div>
              <h2>Uploaded Text File:</h2>
              <p>File Name: {textFile.name}</p>
              <div>
                <h3>File Content:</h3>
                <pre>{textFileContent}</pre>
              </div>
            </div>
          )}
          {imageFile && (
            <div>
              <h2>Uploaded Image File:</h2>
              <p>File Name: {imageFile.name}</p>
              <img src={URL.createObjectURL(imageFile)} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          )}
        </header>
      </div>
      <div className="right-section">
        {/* Right section content goes here */}
      </div>
    </div>
  );
}

export default App;
