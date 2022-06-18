import React from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ChatBot from 'react-simple-chatbot';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import ListItemButton from '@mui/material/ListItemButton';
import TextField from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';

import DialogTitle from '@mui/material/DialogTitle';

import { useState, useEffect } from 'react';
import { RadioGroup } from '@mui/material';

import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Perfil ()  {

  const [PopupMensalidade,togglePopupMensalidadeHook] = useState(false)
  const [tipoMensalidade,setTipoMensalidade] = useState('premium')
  const [render,renderHook] = useState("true")
  const [email,setEmail] = useState(localStorage.getItem('email')===null ? "saragoncalves@email.com" : localStorage.getItem('email'))
  const [contacto,setContacto] = useState(localStorage.getItem('contacto')===null ? "928022049" : localStorage.getItem('contacto'))
  const handleChangeMensalidade = (event,value) => {
    setTipoMensalidade(value)
    console.log(value)
    //localStorage.setItem('tipoMensalidade',value)
  }
  const togglePopupMensalidade = () =>{
    togglePopupMensalidadeHook(!PopupMensalidade)
  }

  const sendLocaldb = (event,value) => {
    console.log(tipoMensalidade)
    localStorage.setItem('tipoMensalidade',tipoMensalidade)
    togglePopupMensalidadeHook(!PopupMensalidade)
    
  }
  const cancelChange = () =>{
    let temp = localStorage.getItem('tipoMensalidade')
    setTipoMensalidade(temp)

    togglePopupMensalidadeHook(!PopupMensalidade)
  }

  const updateContacto = (e) => {
    setContacto(e);

    localStorage.setItem('contacto',e)
  }
  const updateEmail = (e) => {
    setEmail(e);

    localStorage.setItem('email',e)
  }


  useEffect(() => {  
    if(render=="true"){

      let temp = localStorage.getItem('tipoMensalidade')
      console.log(temp)
      setTipoMensalidade(temp)
      renderHook("false")
    }
    console.log("false")

  });

  return (
    <React.Fragment>
      <Grid container sx={{pl:'240px'}}>
        <Grid item xs={8} sx={{pr:'5vw',pl:'5vw'}}>
          <Typography sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}} variant="h1" component="div" gutterBottom>
              Perfil
            </Typography>
          <Paper elevation={4} sx={{flex:1}}>
            <Grid container>

              <Grid item xs={6}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Nome:"
                      secondary={'Sara Gonçalves'}
                    />
                  </ListItem>
                  <ListItem>
                    <TextField id="standard-basic" label="E-Mail" variant="standard"  defaultValue={email} onChange={(e) => updateEmail(e.target.value)} />

                  </ListItem>
                  <ListItem>
                    <TextField id="standard-basic" label="Contacto" variant="standard"  defaultValue={contacto} onChange={(e) => updateContacto(e.target.value)}/>

                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Mensalidade:"
                      secondary={tipoMensalidade}
                    />
                  </ListItem>

                </List>
              </Grid>
              <Grid item xs={6}>
                <List> <ListItem>
                  <ListItemText
                    primary="Género"
                    secondary={'Feminino'}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Aderente Desde:"
                    secondary={'19/5/22'}
                  />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary="NIF:"
                      secondary={'26456789'}
                    />
                  </ListItem>
                </List  >
              </Grid>
            </Grid>
        </Paper>
        </Grid>
        <Grid item xs={4} sx={{pt:'5vw'}}>
          <Avatar variant ='square'sx={{height:'99%',width:'99%'}}src={require("../image/avatar2.jpg")} /> 
        </Grid>
      </Grid>

      <Grid container sx={{pl:'17.5vw'}}>

          <Button variant='outlined' onClick={togglePopupMensalidade}>
            Alterar tipo de mensalidade
          </Button>
            {
              <Dialog onClose={togglePopupMensalidade} open={PopupMensalidade} >
                <Box sx={{pt:'0.5vw',pb:'1vw',pr:'1vw',pl:'1vw'}}>
                <DialogTitle>
                    Tipo de Mensalidade
                </DialogTitle>
                <RadioGroup value={tipoMensalidade} onChange={handleChangeMensalidade} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}  row> 
                  <FormControlLabel value="base" control={<Radio />} label="Base" />
                  <FormControlLabel value="premium" control={<Radio />} label="Premium" />
                </RadioGroup>
                <Grid container sx={{pt:'0.5vw'}}>

                  <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <Button onClick={sendLocaldb} variant="outlined">
                      Alterar
                    </Button>
                  </Grid>

                  <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <Button variant="outlined" onClick={cancelChange}>
                      Cancelar
                    </Button>
                  </Grid>
                  
                </Grid>

                </Box>
              </Dialog>
            }

      </Grid>

    
  
    </React.Fragment>
  );
};

export default Perfil;
