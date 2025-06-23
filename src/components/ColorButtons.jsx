import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons({ onClick }) {
  return (
    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
      <Button variant="contained" color="success" onClick={onClick}>
        Shorten
      </Button>
    </Stack>
  );
}
