import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function ResponsiveIcon({className, onClick}) {

  return (
          <IconButton className={className} color="inherit" aria-label="menu" onClick={onClick}>
            <MenuIcon />
          </IconButton>
  );
}