
import * as React from "react";

import ChatBot from 'react-simple-chatbot';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



import { NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

let renderCounter = 0;



export default function Cart () {
    
  if (true) {
    renderCounter+=1;
    console.log(`renderCount: ${renderCounter}`);
  }

  
  const theme = { //Chat shit
    background: '#f5f8fb',
    fontFamily: 'Roboto',
    headerBgColor: '#ea6a47',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#ea6a47',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  


  return(
<>
    <Grid container sx={{pl:'240px'}}>
      <NavLink to='/Checkout'>
        <Button variant='contained'>
                Registar
        </Button>
      </NavLink>
    </Grid>
</>

  )
}