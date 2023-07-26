import React from 'react';
import { saveAs } from 'file-saver';

const DynamicButton = ({ url }) => {
  const handleDownload = () => {
    // Fetch the PDF file from the provided URL
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        // Save the file using file-saver
        saveAs(blob, 'downloaded_file.pdf');
      })
      .catch((error) => {
        console.error('Error downloading the file:', error);
      });
  };

  return (
    <button onClick={handleDownload}>
      Resume 
    </button>
  );
};

export default DynamicButton;
