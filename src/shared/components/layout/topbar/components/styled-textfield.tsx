import { styled, TextField } from '@mui/material';

import {
  DARK_GREY,
  WHITE,
} from '../../../../utils/constants/color-constants.util';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  color: '#fff',
  background: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '4px',
  width: '60%',
  '& .MuiInputBase-root.Mui-focused': {
    backgroundColor: WHITE,
  },
  '& input': {
    color: '#fff !important',
    '&:placeholder': {
      color: 'inherit',
      opacity: 1,
    },
  },
  '& .MuiInputBase-root.Mui-focused input': {
    color: '#000 !important',
    '&::placeholder': {
      color: '#000 !important',
    },
  },
  '& .MuiInputAdornment-root': {
    color: WHITE,
  },
  '& .Mui-focused .MuiInputAdornment-root': {
    color: `${DARK_GREY} !important`,
  },

  '& fieldset': {
    borderWidth: '0px',
    '& fieldset:hover, & fieldset:focus, & fieldset:active': {
      borderWidth: '0px',
    },
    '& .MuiInputBase-input': {
      padding: theme.spacing(2, 1, 1, 2),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  },
}));
