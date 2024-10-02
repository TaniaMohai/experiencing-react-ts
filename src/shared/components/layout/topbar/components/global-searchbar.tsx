import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, InputAdornment } from '@mui/material';

import { StyledTextField } from './styled-textfield';

export const GlobalSearchBar = () => {
  return (
    <Autocomplete
      id="global-search-bar"
      disablePortal
      size="small"
      options={[]}
      renderInput={params => (
        <StyledTextField
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
          onChange={event => {
            console.log(event.target.value);
          }}
        />
      )}
    />
  );
};
