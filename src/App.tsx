import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Box } from '@mui/material';

import { RoutesRenderer } from './shared/utils/routes/RoutesRenderer';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <RoutesRenderer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
