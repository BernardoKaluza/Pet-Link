
import * as React from "react";
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import  {  useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

import Alert from '@mui/material/Alert';

export default function Loja (props) {

  var ArrComida = {
    "1":0,
    "2":0,
    "3":0,
    "4":0,
    "5":0,
    "6":0,
  }
  
  var ArrBrinquedos = {
    "1":0,
    "2":0,
    "3":0,
    "4":0,
    "5":0,
    "6":0,
  }
    
  
  const[brinquedos,brinquedosHook]= React.useState(true)
  const[comida,comidaHook]= React.useState(false)
  const [open, setOpen] = React.useState(false);

  const [tipo, tipoHook] = React.useState('Brinquedos');

  const handleClose = () => {
    setOpen(false);
  };

  const setTipoCompras = (value) => {

    if (value =="Comida"){

      comidaHook(true)
      brinquedosHook(false)
      tipoHook(value)


    }
    if (value =="Brinquedos"){

      comidaHook(false)
      brinquedosHook(true)
      tipoHook(value)
    }
  };

  const AddComida = (value) => {
    
    if (JSON.parse(localStorage.getItem('Comidas')) == null){
      localStorage.setItem('Comidas',JSON.stringify(ArrComida))
    }
    ArrComida = JSON.parse(localStorage.getItem('Comidas'))
    ArrComida[value] += 1
    localStorage.setItem("Comidas", JSON.stringify(ArrComida));
    props.setCart(Object.values(ArrComida).reduce((a, b) => a + b)+Object.values(JSON.parse(localStorage.getItem('Brinquedos'))).reduce((a, b) => a + b))

    
    
  }
  const AddBrinquedo = (value) => {
    
    if (JSON.parse(localStorage.getItem('Brinquedos')) == null){
      localStorage.setItem('Brinquedos',JSON.stringify(ArrBrinquedos))
    }
    ArrBrinquedos = JSON.parse(localStorage.getItem('Brinquedos'))
    ArrBrinquedos[value] += 1
    localStorage.setItem("Brinquedos", JSON.stringify(ArrBrinquedos));
   
    props.setCart(Object.values(JSON.parse(localStorage.getItem('Comidas'))).reduce((a, b) => a + b)+Object.values(ArrBrinquedos).reduce((a, b) => a + b))
  }

  return(

    <>

    <Grid container sx={{pl:'240px'}}>

      <Grid item xs={3} sx={{border:0}}>

      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tipo}
          onChange={(e) => setTipoCompras(e.target.value)}
        >
          <MenuItem value={'Brinquedos'}>Brinquedos</MenuItem>
          <MenuItem value={'Comida'}>Comida</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={9} sx={{border:0}}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert variant ='outlined' onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Adicionado!
          </Alert>
        </Snackbar>
      </Grid>

      <Grid item xs={12} sx={{height:'40vw',border:0,pr:'1vw',pt:'1vw'}}>
        {brinquedos&&
        <List style={{maxHeight: '100%', overflow: 'auto'}} >
          <Grid container sx={{border:0}}>
          <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%',alignItems:'center',justifyContent:'center',display:'flex'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987729685226061914/unknown.png'} /> 
              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  Brinquedo com Padrão Laser HSLA para Gato Carregamento USB
                  13,96 €
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '1' onClick={(e) => AddBrinquedo(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987730022691401778/unknown.png'} /> 

              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  Zee.Dog Brinquedo para Cão Super Banana
                  12,34 €
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '2' onClick={(e) => AddBrinquedo(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%',alignItems:'center',justifyContent:'center',display:'flex'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987730822528397382/unknown.png'} /> 
              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  Brinquedos para cães lançador de ténis interativo
                  12,80€
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '3' onClick={(e) => AddBrinquedo(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987731539221676042/unknown.png'} /> 

              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  brinquedos de latex para cães
                  8,79 €
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '4' onClick={(e) => AddBrinquedo(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%',alignItems:'center',justifyContent:'center',display:'flex'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987731673254854676/unknown.png'} /> 
              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  Brinquedo sonoro para cão Zolia Woopy Ball
                  16,99 €
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '5' onClick={(e) => AddBrinquedo(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%',alignItems:'center',justifyContent:'center',display:'flex'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987731966445113394/unknown.png'} /> 

              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  Ventosa brinquedo para Cão
                  13,32 €
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '6' onClick={(e) => AddBrinquedo(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>                  
           
          </Grid>
        </List>
        }

        {comida&&
        <List style={{maxHeight: '100%', overflow: 'auto'}} >
           <Grid container sx={{border:0}}>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%',alignItems:'center',justifyContent:'center',display:'flex'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987726555063136266/unknown.png'} /> 
              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  Continente Seleção Ração para Cão Adulto com Frango
                  17,99 €
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '1' onClick={(e) => AddComida(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987727537461399564/unknown.png'} /> 

              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  12kg pato e batata sem cereais Briantos Adult ração para cães
                  37,99€
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '2' onClick={(e) => AddComida(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987727750704009217/unknown.png'} /> 
              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  Ração Para Cão Purina One Mini Active Com Frango 1.5kg
                  5,99 €
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '3' onClick={(e) => AddComida(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
              <Avatar variant ='square'sx={{height:'90%',width:'90%'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987727866059956224/unknown.png'} /> 
              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  Ração Friskies Coelho Gato 1,5 kg
                  4,49 €
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '4' onClick={(e) => AddComida(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987728051611791491/unknown.png'} /> 
              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  É Continente Ração para Gato Adulto Carne 4kg
                  5,49€
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '5' onClick={(e) => AddComida(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:0,height:'16vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'90%',width:'90%'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987728700160229426/unknown.png'} /> 
              </Grid>
              <Grid container item xs={12}sx={{border:0,height:'4vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid item xs ={9} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  Purina One Ração para Gato Adulto Frango
                  11,39 €
                </Grid>
                <Grid item xs={3} sx={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button value = '6' onClick={(e) => AddComida(e.target.value)}  variant = 'outlined' label = 'Comprar'>Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </List>
        }
        

      </Grid>
    </Grid>
    </>

  )
}