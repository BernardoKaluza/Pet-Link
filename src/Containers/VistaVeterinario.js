import * as React from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Calendario from '../components/calendariovet'
import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';

import Navigation from '../components/navigation'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { useState, useEffect } from 'react';

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';



export default function VistaVeterinario () {

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
 
  


    
  const backgroundImage = require("../image/husky.jpg");




  const [page, setPage] = React.useState(1);
  const [vacinapopup,toggleVacinaHook] = React.useState('false')
  const [numeroAnimais,numeroAnimaisHook] = React.useState(parseInt(localStorage.getItem('numeroAnimais')))

  const handleChange = (event, value) => {
    setPage(value);
  };

  const toggleVacina = () =>{
    toggleVacinaHook(!vacinapopup)
  }

  useEffect(() => {  
    localStorage.setItem('numeroAnimais',numeroAnimais)
  });

  const addAnimal = () =>{
    let numAnimal= localStorage.getItem('numeroAnimais')
    if (numAnimal==null){
      numeroAnimaisHook(1)
    }

   
    else if (numAnimal >=3){
      numeroAnimaisHook(3)
    }
    else{
      numeroAnimaisHook(numeroAnimais+1)
    }
    console.log(numeroAnimais)
  }

  const removerAnimal = () =>{
    let numAnimal= localStorage.getItem('numeroAnimais')
    if (numAnimal==null){
      numeroAnimaisHook(1)
    }
    else if (numAnimal<=1){
      numeroAnimaisHook(1)
    }
    else{
      numeroAnimaisHook(numeroAnimais-1)
    }
    console.log(numeroAnimais)
  }

  return(
    <>
  
    <Grid container sx={{paddingLeft:'240px',border:1}} spacing={1}>

        <Grid item xs={12} sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Pesquisar Animais"
                // inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                
            </Paper>
        </Grid>

        <Grid  item xs={12}  sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex',height:'30vw'}}>
           <Calendario />
        </Grid>
    </Grid>

    </>
  )
}