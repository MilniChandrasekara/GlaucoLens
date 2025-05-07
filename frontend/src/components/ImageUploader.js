import React, { useState, useRef } from 'react';
import { Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match('image.*')) {
        setError('Please select an image file');
        return;
      }

      setSelectedFile(file);
      setError('');
      setResult(null);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFileSelect({ target: { files: event.dataTransfer.files } });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError('Please select an image first');
      return;
    }

    setIsLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Replace with your backend API endpoint
      const response = await axios.post('http://127.0.0.1:5002/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setResult(response.data);
      console.log("API Response:", response.data);
      setIsLoading(false);
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Failed to process image. Please try again.');
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreview('');
    setResult(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Determine if result indicates glaucoma is present
  const isGlaucoma = (resultData) => {
    return resultData?.prediction === "Glaucoma" ||
           resultData?.result === "Glaucoma Present" ||
           resultData?.diagnosis === "Glaucoma";
  };

  // Get confidence value from various possible fields
  const getConfidenceValue = (resultData) => {
    if (resultData?.confidence !== undefined) {
      return resultData.confidence;
    } else if (resultData?.probability !== undefined) {
      return resultData.probability > 0.5 ? resultData.probability : 1 - resultData.probability;
    }
    return 0;
  };

  return (
    <div className="image-uploader">
      {error && <Alert variant="danger">{error}</Alert>}

      <div
        className="upload-area"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleUploadClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileSelect}
          accept="image/*"
        />

        {!preview ? (
          <>
            <i className="bi bi-cloud-arrow-up display-1 text-primary"></i>
            <h4 className="mt-3">Drag & Drop retina image here</h4>
            <p className="text-muted">or click to browse files</p>
          </>
        ) : (
          <div className="text-center">
            <img src={preview} alt="Retina Preview" className="preview-image" />
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={!selectedFile || isLoading}
        >
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-2">Processing...</span>
            </>
          ) : "Analyze Image"}
        </Button>
        <Button variant="outline-secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>

      {result && (
        <div className="result-section mt-4">
          <h3 className="text-center mb-3">Analysis Result</h3>
          <div className="text-center">
            <h4>
              {isGlaucoma(result) ? (
                <span className="result-positive">Glaucoma Detected</span>
              ) : (
                <span className="result-negative">No Glaucoma Detected</span>
              )}
            </h4>
            <p>Confidence: {(getConfidenceValue(result) * 100).toFixed(2)}%</p>

            {result.raw_prediction !== undefined && (
              <div className="mt-3 small text-muted">
                <p>Raw prediction value: {result.raw_prediction.toFixed(4)}</p>
                <p>Detection threshold: {result.threshold_used}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;