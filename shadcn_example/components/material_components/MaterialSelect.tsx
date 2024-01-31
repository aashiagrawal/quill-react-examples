import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function MaterialSelect({label, options, onChange, value}) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          placeholder="Select"
        >
          {options.map((option) => (
                <MenuItem value={option.value}>{option.text}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}