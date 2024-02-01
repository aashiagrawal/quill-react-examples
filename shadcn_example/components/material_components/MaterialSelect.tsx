import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function MaterialSelect({label, options, onChange, value}) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="" disabled>Select</MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
