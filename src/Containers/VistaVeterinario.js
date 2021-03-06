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
import { NavLink, useNavigate } from "react-router-dom";
import Navigation from '../components/navigation'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { useState, useEffect } from 'react';

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

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
 
  const steps = [
    {
      id: '0',
      message: 'Necessito de ajuda!',
      trigger: '5',
    },
    {
      id: '5',
      options: [
        { value: 'Necessito de ajuda', label: 'Aceitar', trigger: '1' },],
      hideInput: true,
    },

    {
      id: '1',
      message: 'Animal: Fuzz',
      trigger: '2',
    },
    {
      id: '2',
      component:<List>
      <ListItem>
        <ListItemText
          primary="Dados:"
        />
        <Divider />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Nome:"
          secondary={'Fuzz'}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Peso:"
          secondary={'15kg'}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="??ltima Consulta:"
          secondary={'04/06/2022'}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Chip?"
          secondary={'Sim'}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Ra??a:"
          secondary={'Husky'}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Esp??cie:"
          secondary={'C??o'}
        />
      </ListItem>
      


    </List  >,

      trigger: '3',
      delay: 1500,
    },
    
    {
      id: '3',
      user: true,
      delay: 300,
      trigger:'3'
    },

  ];
  

  const navigation = useNavigate();
    
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
  
    <Grid container sx={{paddingLeft:'240px',border:0}} spacing={1}>

        <Grid item xs={12} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
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
                    <NavLink to="/DarConsulta">
                      <SearchIcon />
                    </NavLink>
                </IconButton>
                
            </Paper>
        </Grid>

        <Grid  item xs={12}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex',height:'30vw'}}>
           <Calendario navigation={ navigation }/>
        </Grid>
    </Grid>
    <ThemeProvider theme={theme}>
    <ChatBot placeholder={"Escreva uma mensagem..."} userAvatar={"https://www.aavmc.org/wp-content/uploads/2020/09/babylak-for-cc.jpg"} botAvatar={"https://cdn.discordapp.com/attachments/631543998422581248/982692964767760426/unknown.png?size=4096"} steps={steps} floating={true} />;
    </ThemeProvider>

    </>
  )
}