import React, { useState } from 'react';
import FullWidthTextField from './FullWidthTextField';
import './main.css';
import axios from 'axios';

const Main = () => {
  const [shortUrls, setShortUrls] = useState([]);

  const handleSubmit = async (originalUrl) => {
    try {
      const res = await axios.get(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`
      );
      setShortUrls(prev => [res.data, ...prev].slice(0, 5));
    } catch (err) {
      alert('Failed to shorten URL');
    }
  };

  return (
    <div id='main-container'>
      <div id='main'>
        <h1 id='main-title'>The Url Sortner for Developers</h1>
        <FullWidthTextField onSubmit={handleSubmit} />
        {shortUrls.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3>Last 5 Shortened URLs:</h3>
            <ul>
              {shortUrls.map((url, idx) => (
                <li key={idx}>
                  <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
