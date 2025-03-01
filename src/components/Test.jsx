import React, { useState, useRef } from 'react';

const DeepfakeDetector = () => {
  const [url, setUrl] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  const handleScan = () => {
    setIsLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      if (selectedFile) {
        alert(`Scanning file: ${selectedFile.name}`);
      } else if (url) {
        alert(`Scanning URL: ${url}`);
      }
      setIsLoading(false);
    }, 2000);
  };
  
  const clearFile = () => {
    setSelectedFile(null);
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* <header className="border-b p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gray-600 text-2xl font-medium">ForReal®</div>
          <div className="flex items-center gap-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
          </div>
        </div>
      </header> */}
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Is this ForReal for real?</h1>
          <p className="text-gray-600">Scan and detect Deepfake videos</p>
        </div>
        
        <div className="w-full max-w-lg">
          {/* URL Input with File Upload Button */}
          <div className="relative mb-4">
            <input 
              type="text" 
              placeholder="https://www.example.com/" 
              className="w-full p-3 pr-12 border rounded-full" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
            />
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
              onClick={triggerFileInput}
              type="button"
              disabled={isLoading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
            
            {/* Hidden file input */}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="video/*" 
              onChange={handleFileChange}
              disabled={isLoading}
            />
          </div>
          
          {/* File display area (only shown when file is selected) */}
          {selectedFile && (
            <div className="mb-4 bg-gray-50 p-3 rounded-lg border flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
              <div className="flex-1 truncate">
                <p className="text-sm font-medium truncate">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
              <button 
                onClick={clearFile} 
                className="text-gray-500 hover:text-red-500"
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
          
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="terms" 
              className="mr-2" 
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              disabled={isLoading}
            />
            <label htmlFor="terms" className="text-sm">
              Allow to get access of the contents of this video
            </label>
          </div>
          
          <button 
            className={`w-full p-3 text-white font-medium rounded bg-gradient-to-r from-cyan-500 to-blue-500 ${(!isChecked || (!url && !selectedFile) || isLoading) ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={!isChecked || (!url && !selectedFile) || isLoading}
            onClick={handleScan}
          >
            <span className="text-sm font-bold">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SCANNING...
                </div>
              ) : 'SCAN'}
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default DeepfakeDetector;