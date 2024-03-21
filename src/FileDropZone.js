import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropZone = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropZoneStyle}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

const dropZoneStyle = {
  border: '2px dashed #ccc',
  padding: '20px',
  textAlign: 'center'
};

export default FileDropZone;
