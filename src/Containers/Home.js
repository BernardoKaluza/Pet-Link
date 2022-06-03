import * as React from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';

import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';

import Navigation from '../components/navigation'


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
      end: true,
    },

  ];



    
  const backgroundImage = require("../image/husky.jpg");




  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return(
    <>
  
    <Grid container sx={{paddingLeft:'240px',border:1,paddingBottom:'1vw'}} spacing={1}>

      <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={4}>
        <Pagination count={3} page={page} onChange={handleChange} sx={{ display:"flex" }}/>
      </Grid>

      <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={2}>
        <Button variant ="contained">
          Adicionar Animal
        </Button>
      </Grid>
      <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={2}>
        <Button variant ="contained">
          Remover Animal
        </Button>
      </Grid>
      <Grid sx={{border:1,alignItems:'center',justifyContent:'right',display:'flex',paddingRight:'3vw'}}item xs={4}>
        <Button  variant ="contained">
          Atualizar Dados
        </Button>
      </Grid>
    </Grid>

      <Grid container sx={{paddingLeft:'240px',border:1}}>
        <Grid  sx={{backgroundImage: `url(${backgroundImage})`,height:'30vw', backgroundSize:'cover',border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={5}>
          {/* <img sx={{display:'flex' }}src={require("../image/husky.jpg")} /> */}
        </Grid>
        <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex',pl:'1vw',pr:'1vw'}}item xs={4}>
          <Paper elevation={4} sx={{flex:1}}>
            <Stack spacing ={2}>
              <h2>Dados Animal:</h2>
              <h2>    Peso : 15kg</h2>
              <Stack sx={{alignItems:'center',justifyContent:'center',display:'flex'}} direction='row'><h2>Vacinado</h2>
                <Avatar on sx={{display:'flex' }}src={require("../image/bell.png")} />
              </Stack>
              <h2>Dados Animal</h2>
              <h2>Dados Animalllllllllllllllllllllll</h2>
              <h2>Dados Animal</h2>
            </Stack>
          </Paper>
        </Grid>
        <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={3}>

         <ThemeProvider theme={theme}>
          <ChatBot steps={steps} floating={true} />;
       </ThemeProvider>
    

        </Grid>
      </Grid>

      <Grid container sx={{paddingLeft:'240px',border:1}}>
        <Grid item sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}} xs={9}>
          <h2>9</h2>
        </Grid>
        {/* <Grid container item sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}} xs={3} spacing={2}>
            <Grid sx={{border:1}} item xs={6}>
              <Button variant ="contained">
                Conversas Anteriores
              </Button>
            </Grid>
          <Grid sx={{paddingRight:'1vw'}}item xs={6}>
            <Button  variant ="contained">
              Contactar Veterinários
            </Button>
          </Grid>
        </Grid> */}
      </Grid>
     
    </>
  )
}