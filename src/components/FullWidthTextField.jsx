import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ColorButtons from './ColorButtons';

export default function FullWidthTextField({ onSubmit }) {
  const [url, setUrl] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url);
      setUrl('');
    }
  };

  return (
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Enter URL to Shorten"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <ColorButtons onClick={handleSubmit} />
      </form>
    </Box>
  );
}
