import React from "react";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

export default function SearchComponent() {
  return (
    <div className="search-container">
      <div className="input-container">
        <TextField
          id="outlined-basic"
          className="margins-component"
          label="Company"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          className="margins-component"
          label="Location"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          className="margins-component"
          label="Weather"
          variant="outlined"
        />
      </div>

      <div className="margins-component">
        <InputLabel id="demo-simple-select-outlined-label">Fulltime</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          //value={age}
          //onChange={handleChange}
          label="Fulltime"
          style={{ minWidth: 120 }}
        >
          <MenuItem value={5}>Both</MenuItem>
          <MenuItem value={10}>No</MenuItem>
          <MenuItem value={20}>Yes</MenuItem>
        </Select>
      </div>
      <Button variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
}
