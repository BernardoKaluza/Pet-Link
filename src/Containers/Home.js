import * as React from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ChatBot from 'react-simple-chatbot';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { ThemeProvider } from 'styled-components';

import Navigation from '../components/navigation'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { useState, useEffect } from 'react';



export default function Home () {

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
      options: [
        { value: 'Necessito de ajuda', label: 'Necessito de ajuda!', trigger: '1' },],
      hideInput: true,
    },
    {
      id: '1',
      message: 'Olá, como posso ajudar?',
      trigger: '2',
    },
    {
      id: '2',
      message: "1- Contactar um veterinário",
      trigger: '3',
      delay: 1000,
    },
    {
      id: '3',
      message: "2- Ver as perguntas frequentes",
      trigger: '4',
      delay:0,
    },
    {
      id: '4',
      options: [
        { value: 'Necessito de contactar um veterinário', label: '1', trigger: '5' },
        { value: 'Quero ver as perguntas frequentes', label: '2', trigger: '6' },
      ],
    },
    {
      id: '5',
      message: "Um veterinário entrará em contacto brevemente... ",
      trigger: '7',
    },
    {
      id: '6',
      message: "vou redirecioná-lo/a para a página de perguntas frequentes... ",
      trigger: '4',
    }, 
    {
      id: '7',
      message: "Com que animal necessita de ajuda? ",
      trigger:'9'
    },
    {
      id: '9',
      options: [
        { value: 1, label: '1', trigger: '8' },
        { value: 2, label: '2', trigger: '8' },
        { value: 3, label: '3', trigger: '8' },
      ],
    },
    

    {
      id: '8',
      message: "Olá, como posso ajudar?",
      avatar: 'https://www.aavmc.org/wp-content/uploads/2020/09/babylak-for-cc.jpg',
      trigger:'10',
    },
    {
      id: '10',
      user: true,
     trigger:'10'
    },

  ];



    
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
  
    <Grid container sx={{paddingLeft:'240px',border:0,paddingBottom:'1vw'}} spacing={1}>

      <Grid sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={8}>
        <Pagination size="large" count={numeroAnimais} page={page} onChange={handleChange} sx={{ pl:'30vw',display:"flex" }}/>
      </Grid>

      <Grid sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={2}>
        <Button variant ="contained" onClick={addAnimal}>
          Adicionar Animal
        </Button>
      </Grid>
      <Grid sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={2}>
        <Button variant ="contained" onClick={removerAnimal}>
          Remover Animal
        </Button>
      </Grid>
    
    </Grid>

      <Grid container sx={{paddingLeft:'240px',border:0}}>
        <Grid  sx={{height:'30vw', backgroundSize:'cover',border:0,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={6}>
          <Avatar variant ='square'sx={{height:'99%',width:'99%'}}src={require("../image/husky.jpg")} /> 
        </Grid>

        <Grid sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex',pl:'1vw',pr:'1vw'}}item xs={6}>
          <Paper elevation={4} sx={{flex:1}}>
           
              <List>
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
                    primary="Última Consulta:"
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
                    primary="Raça:"
                    secondary={'Husky'}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Espécie:"
                    secondary={'Cão'}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Vacinas:"
                    secondary= {<div onClick={toggleVacina}>
                    <Avatar on sx={{display:'flex' }}src={require("../image/bell.png")} />
                      <paper >
                      <Dialog onClose={toggleVacina} open={!vacinapopup} >
                        <DialogTitle>
                            Vacinas
                        </DialogTitle>
                          <h2>Vacina 1</h2>
                          <h2>Vacina 3</h2>
                          <h2>Vacina 4</h2>
                          <h2>Vacina 5</h2>
  
                       
                       </Dialog>
                       </paper>
                  </div>}
                  />
                </ListItem>


              </List  >

          </Paper>
        </Grid>
        </Grid>
        <ThemeProvider theme={theme}>
        <ChatBot  placeholder={"Escreva uma mensagem..."}  steps={steps} floating={true} />;
         
       </ThemeProvider>
    </>
  )
}