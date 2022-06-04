import * as React from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';

import Navigation from '../components/navigation'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import List from '@mui/material/List';

import { useState, useEffect } from 'react';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
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


export default function DarConsulta () {

  const [page, setPage] = React.useState(1);
  const [vacinapopup,toggleVacinaHook] = React.useState('false')
  const [numeroAnimais,numeroAnimaisHook] = React.useState(parseInt(localStorage.getItem('numeroAnimais')))

  const handleChange = (event, value) => {
    setPage(value);
  };

  const toggleVacina = () =>{
    toggleVacinaHook(!vacinapopup)
  }

  return(
    <>
    <Grid container sx={{paddingLeft:'240px',border:0}} spacing={1}>
      <Grid container item xs={8} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
        
        <Grid container item xs={12}>
            <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
              <Avatar variant ='square'sx={{height:'11vw',width:'11vw'}}src={require("../image/husky.jpg")} /> 
            </Grid>
          <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
            <Stack>
                <h1>Pantufa</h1>
                <Button variant="outlined">Atualizar ficha</Button>
            </Stack>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{pr:'1vw',pb:'1vw',pt:'1vw',pl:'1vw'}}>
          <Paper elevation={4} sx={{flex:1}}>
            <Stack sx={{flex:1}}>
                <Grid container  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <Grid item xs={2}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                        <h3>Dia 31/2/22</h3>
                    </Grid>
                    <Grid item xs={10}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'5vw'}}>
                        <h1>Plano de tratamento</h1>
                    </Grid>
                </Grid>
                <TextField
                sx={{pr:'2vw',pl:'2vw',pb:'2vw'}}
                id="filled-multiline-static"
                multiline
                rows={6}
                defaultValue= ""
                variant="filled"
                />
            </Stack>
          </Paper>
        </Grid>    

        <Grid item xs={12} sx={{pr:'1vw',pb:'1vw',pl:'1vw'}}>
          <Paper elevation={4} sx={{flex:1}}>
            <Stack sx={{flex:1}}>
                <Grid container  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <Grid item xs={2}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>

                    </Grid>
                    <Grid item xs={10}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'5vw'}}>
                        <h1>Plano Nutricional</h1>
                    </Grid>
                </Grid>
                <TextField
                sx={{pr:'2vw',pl:'2vw',pb:'2vw'}}
                id="filled-multiline-static"
                multiline
                rows={6}
                defaultValue= ""
                variant="filled"
                
                />
            </Stack>
          </Paper>
        </Grid>

        </Grid>


      <Grid container item xs={4} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>

        <Grid item xs={12} >
        <Paper elevation={4} sx={{flex:1}}>
            
            <List sx={{maxHeight:"26.8vw", overflow: "auto"}}>
      
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
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={4} sx={{flex:1}}>
            <Stack sx={{flex:1}}>
                <Grid container  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <Grid item xs={12}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                        <h1>Notas</h1>
                    </Grid>
                </Grid>
                <TextField
                sx={{pr:'2vw',pl:'2vw',pb:'2vw'}}
                id="filled-multiline-static"
                multiline
                rows={6}
                defaultValue= ""
                variant="filled"
                />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
        
    <ThemeProvider theme={theme}>
    <ChatBot placeholder={"Escreva uma mensagem..."} userAvatar={"https://www.aavmc.org/wp-content/uploads/2020/09/babylak-for-cc.jpg"} botAvatar={"https://cdn.discordapp.com/attachments/631543998422581248/982692964767760426/unknown.png?size=4096"} steps={steps} floating={true} />;
    </ThemeProvider>

     
    </>
  )
}