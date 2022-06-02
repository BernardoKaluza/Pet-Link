import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>

        <MenuItem>
          <ListItemText> 13-06-2022 Ligar a Charles </ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem>
          <ListItemText>Lorem Ipsum</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem>
          <ListItemText>Lorem Ipsum</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}