import { FunctionComponent, ReactElement } from 'react';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, Typography } from '@mui/material';

import { MenuStateButtonPropsModel } from '../models/menu-state-button-props.model';

const MenuStateButton: FunctionComponent<MenuStateButtonPropsModel> = ({
  isOpen,
  onClick,
}: MenuStateButtonPropsModel) => {
  const contentBasedOnOpen: ReactElement = isOpen ? (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      <IconButton>
        <ArrowBackIosNewIcon sx={{ width: '20px', height: '14px' }} />
      </IconButton>
      {isOpen && <Typography>Collapse</Typography>}
    </Box>
  ) : (
    <IconButton onClick={onClick}>
      <ArrowForwardIosIcon sx={{ width: '20px', height: '14px' }} />
    </IconButton>
  );

  return <Box sx={{ mt: 'auto', p: '20px' }}>{contentBasedOnOpen}</Box>;
};

export default MenuStateButton;
