import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { NavLink } from 'react-router-dom';



function Register  ()  {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <>
      <Container sx={{width:'30vw'}} >
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{height:'20vw',Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex'}}>
            <Avatar  alt="ERROR" src={ require("../image/logo.webp")}  sx={{height: "100%",width:'15vw'}} />
          </Grid>
          <Grid item xs={12} sx={{height:'4vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField variant='outlined' label ='Nome de Utilizador' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'4vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField type ="password"variant='outlined' label ='Palavra-passe' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'4vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField type ="password" variant='outlined' label ='Confirmar Palavra-passe' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'4vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField  variant='outlined' label ='E-mail' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'4vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField  variant='outlined' label ='NIF' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          
          <Grid item xs={6} sx={{height:'7vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
            
                name="radio-buttons-group"
              >
                <FormControlLabel value="Base" control={<Radio />} label="Female" />
                <FormControlLabel value="Premium" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{height:'7vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Mensalidade</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Base"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Base" control={<Radio />} label="Base" />
                <FormControlLabel value="Premium" control={<Radio />} label="Premium" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{border:0,justifyContent:'center',alignItems:'center',display: 'flex'}}>

          <Card sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex'}}>
              <CardContent>
                
                <Typography variant="h5" component="div">
                  Base
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  75€ / mês
                </Typography>
                <Typography variant="body2">
                {bull} Inclui 1 animal
                  <br />
                {bull} Inclui 3 consultas e 3 serviços
                <br />
                {bull} 1 entrega de comida por mês
                <br />
                {bull} +75€ por animal
                </Typography>
              </CardContent>
             
            </Card>

          </Grid>

          <Grid item xs={6} sx={{border:0,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Card sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex'}}>
              <CardContent>
      
                <Typography variant="h5" component="div">
                 Premium
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  300€ / mês
                </Typography>
                <Typography variant="body2">
                {bull} Inclui 3 animais
                  <br />
                {bull} Inclui consultas e serviços ilimitados
                <br />
                {bull} 2 entregas de comida por mês por animal
                <br />
                {bull} +50€ por animal
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
           
            </Card>
          </Grid>

          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <NavLink to='/Checkout'>
              <Button variant='contained'>
                      Registar
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;