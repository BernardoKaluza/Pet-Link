import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { NavLink } from 'react-router-dom';

import NavbarLogin from '../components/NavbarLogin'


function Login  (props)  {

  const[username,usernameHook]=React.useState('')

  const setUsername=(value) =>{

    usernameHook(value)
    localStorage.setItem("username",value)
  }

  const HandleLogin = () =>{
    if (username==='vet'){
      props.setVet(true)
      props.setLogin(true)
    }
    else{
      props.setVet(false)
      props.setLogin(true)
    }
  }
  return (
    <>

     
      <Container sx={{width:'30vw'}} >
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{height:'23vw',Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex'}}>
            <Avatar  alt="ERROR" src={ require("../image/logo.webp")}  sx={{height: "100%",width:'15vw'}} />
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField onChange={(e) => setUsername(e.target.value)} variant='outlined' label ='Nome de Utilizador' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField id="pw"type='password'variant='outlined' label ='Palavra-passe' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{justifyContent:'center',alignItems:'center',display: 'flex'}}>
             <FormGroup sx={{alignItems:'left'}}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Manter Sessão Iniciada" />
             </FormGroup>
          </Grid>
          <Grid item xs={12} sx={{justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <NavLink to='/Home'>
              <Button variant='contained' onClick={HandleLogin}>
                      Login
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;