import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { NavLink as Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Grid from '@mui/material/Grid';

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { render } from "@testing-library/react";

const drawerWidth = 240;

export default function Navigation2(props) {
  const settings = ['Perfil', 'Logout'];


  const [selectedIndex, setSelectedIndex] = React.useState('');
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    
  };



  return (
      <>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        {/* --------------------------------------NAVBAR HORIZONTAL-------------------------------------------------------- */}
        <Toolbar  >
          <Grid container>

            <Grid item xs={"10"} sx={{justifyContent:'left',alignItems:'center',display:'flex'}}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="h4"  onClick={(event) => handleListItemClick(event, null)} sx={{ color:"#ffffff" }} >
                  PetLink 
                </Typography>
              </Link>
            </Grid>

            <Grid sx={{justifyContent:'right',alignItems:'right',display:'flex'}} item xs={"2"} >
              <Tooltip title="Open settings">
                <IconButton sx={{justifyContent:'right',alignItems:'right',display:'flex'}} onClick={handleOpenUserMenu} >
                  <Avatar  alt="Remy Sharp" />
                </IconButton>
              </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
    
                <Link to={'/Login'} style={{textDecoration: 'inherit', color: 'inherit'}}>
                <MenuItem key={'Logout'} onClick={ () => {handleCloseUserMenu(); props.setLogin(false);} }>
                  <Typography textAlign="center">{'Logout'}</Typography>
                </MenuItem>
                </Link>
              
            </Menu>
            </Grid>
            </Grid>
        </Toolbar>
      </AppBar>

      {/* --------------------------------------NAVBAR HORIZONTAL    FIM-------------------------------------------------------- */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar >
          
        </Toolbar >

        <Divider />

     
        
            <List component="nav" aria-label="main mailbox folders">
            
            {/* --------------------------------------ITEM DA SIDEBAR-------------------------------------------------------- */}

            <Link to={'/darconsulta'} style={{textDecoration: 'inherit', color: 'inherit'}}>
                <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)} >    {/*numero tem de ser diferente para o highlight funcionar */}
                <ListItemIcon >
                    <CalendarMonthIcon /> {/*escolher icone*/}
                </ListItemIcon>
                
                <ListItemText primary="Ver Animal" /> {/*CONSULTAS*/}
                </ListItemButton>
            </Link>
            {/* --------------------------------------ITEM DA SIDEBAR-------------------------------------------------------- */}
            
          </List>

          <Divider />
       
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
    </>
  );
  
}
