import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Image1 = () => {
  return (
    <div>
        <Box
      sx={{
        display: 'flex',
       
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 300,
          backgroundSize: 'cover',
        },
      }}
    >
      
      <Paper sx={{backgroundImage: 'url("/images/image1.jpg")'}} />
      
    </Box>
    </div>
  )
}

export default Image1