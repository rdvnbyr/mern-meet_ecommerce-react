import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


export default function Search({onClick}) {
  return (
    <IconButton aria-label="search" color="inherit" onClick={onClick}>
        <SearchIcon />
    </IconButton>
  );
}
