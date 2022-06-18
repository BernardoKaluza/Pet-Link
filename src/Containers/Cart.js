
import * as React from "react";

import ChatBot from 'react-simple-chatbot';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { useEffect } from 'react';


import { NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';







let renderCounter = 0;

export default function Cart (props) {

  var ArrComida = {
    "1":1,
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
  
  const [brinquedo1, setBrinquedo1] = React.useState(0);
  const [brinquedo2, setBrinquedo2] = React.useState(0);
  const [brinquedo3, setBrinquedo3] = React.useState(0);
  const [brinquedo4, setBrinquedo4] = React.useState(0);
  const [brinquedo5, setBrinquedo5] = React.useState(0);
  const [brinquedo6, setBrinquedo6] = React.useState(0);

  const [comida1, setComida1] = React.useState(0);
  const [comida2, setComida2] = React.useState(0);
  const [comida3, setComida3] = React.useState(0);
  const [comida4, setComida4] = React.useState(0);
  const [comida5, setComida5] = React.useState(0);
  const [comida6, setComida6] = React.useState(0);

  const[load,setLoad]=React.useState('');

  const clearCart = () => {
    let resetArr = {
      "1":0,
      "2":0,
      "3":0,
      "4":0,
      "5":0,
      "6":0,
    }
    localStorage.setItem("Comidas", JSON.stringify(resetArr));
    localStorage.setItem("Brinquedos", JSON.stringify(resetArr));
    setBrinquedo1(0);
    props.setCart(0)

  };


  useEffect(() => {
    console.log("useEffect");
    if (JSON.parse(localStorage.getItem('Comidas')) == null){
      let comidas = localStorage.getItem('Comidas');
    }
    console.log(JSON.parse(localStorage.getItem('Comidas')));
    ArrBrinquedos = JSON.parse(localStorage.getItem('Brinquedos'))
    ArrComida = JSON.parse(localStorage.getItem('Comidas'))


    setBrinquedo1(ArrBrinquedos['1']);
    setBrinquedo2(ArrBrinquedos['2']);
    setBrinquedo3(ArrBrinquedos['3']);
    setBrinquedo4(ArrBrinquedos['4']);
    setBrinquedo5(ArrBrinquedos['5']);
    setBrinquedo6(ArrBrinquedos['6']);

    setComida1(ArrComida['1']);
    setComida2(ArrComida['2']);
    setComida3(ArrComida['3']);
    setComida4(ArrComida['4']);
    setComida5(ArrComida['5']);
    setComida6(ArrComida['6']);

    setLoad('1');
    // console.log(brinquedo1);
    // console.log(brinquedo2);
    // console.log(brinquedo3);
    // console.log(brinquedo4);
    // console.log(brinquedo5);
    // console.log(brinquedo6);

    // console.log("help");
    // console.log(ArrBrinquedos['1']);
    // console.log(ArrBrinquedos['2']);
    // console.log(ArrBrinquedos['3']);
    // console.log(ArrBrinquedos['4']);
  });

  const AddBrinquedo = (value) => {

    ArrBrinquedos[value] += 1;
    localStorage.setItem("Brinquedos", JSON.stringify(ArrBrinquedos));
    setLoad('')
  }

  const RmBrinquedo=(value)=>{

    if(!ArrBrinquedos[value]==0){
      ArrBrinquedos[value] -= 1;
      localStorage.setItem("Brinquedos", JSON.stringify(ArrBrinquedos));
      setLoad('');
    }
  }
  

    const AddComida = (value) => {

      ArrComida[value] += 1;
      localStorage.setItem("Comidas", JSON.stringify(ArrComida));
      setLoad('')
    }
  
    const RmComida=(value)=>{

      if(!ArrComida[value]==0){
        ArrComida[value] -= 1;
        localStorage.setItem("Comidas", JSON.stringify(ArrComida));
        setLoad('');
      }
    }

  

  return(
<>

    <Grid container sx={{pl:'240px'}}>
    <Grid item xs={2} sx={{justifyContent:'center',alignItems:'center',display: 'flex',pb:'1vw'}}>
    <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987776409701330944/unknown.png'} /> 

      </Grid>
    <Grid item xs={8}sx={{justifyContent:'left',alignItems:'left',display: 'flex',pb:'1vw'}}>
      <h1>CARRINHO</h1>
      </Grid>
      <Grid item xs={2} sx={{justifyContent:'right',alignItems:'right',display: 'flex',pb:'1vw',pr:'2vw'}}>
        <Button variant="outlined" onClick={clearCart}>Limpar carrinho</Button>
      </Grid>
    <Grid item container xs={12} sx={{height:'33vw',justifyContent:'center',alignItems:'',display: 'flex',pb:'1vw'}}>
    <List style={{maxHeight: '100%', overflow: 'auto',flex:1}} >
    {brinquedo1!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>

        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987729685226061914/unknown.png'} /> 
        </Grid>

        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Brinquedo com Padrão Laser HSLA para Gato Carregamento USB
        </Grid>

        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  13,96 €
        </Grid>

        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {brinquedo1}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button value = '1' onClick={(e) => AddBrinquedo(e.target.value)}  variant = 'outlined' label = 'Comprar'>Adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='1' onClick={(e) => RmBrinquedo(e.target.value)} variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {brinquedo2!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987730022691401778/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Zee.Dog Brinquedo para Cão Super Banana
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  12,34 €
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {brinquedo2}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='2' onClick={(e) => AddBrinquedo(e.target.value)} variant='outlined'> Adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='2' onClick={(e) => RmBrinquedo(e.target.value)} variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
       {brinquedo3!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987730822528397382/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Brinquedos para cães lançador de ténis interativo
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  12,80€
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {brinquedo3}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='3' onClick={(e) => AddBrinquedo(e.target.value)} variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='3' onClick={(e) => RmBrinquedo(e.target.value)}variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {brinquedo4!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987731539221676042/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Brinquedos de latex para cães
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  8,79 €
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {brinquedo4}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='4' onClick={(e) => AddBrinquedo(e.target.value)}  variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='4' onClick={(e) => RmBrinquedo(e.target.value)} variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {brinquedo5!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987731673254854676/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Brinquedo sonoro para cão Zolia Woopy Ball
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  16,99 €
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {brinquedo5}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='5' onClick={(e) => AddBrinquedo(e.target.value)} variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='5' onClick={(e) => RmBrinquedo(e.target.value)}  variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {brinquedo6!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987731966445113394/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Ventosa brinquedo para Cão
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  13,32 €
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {brinquedo6}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='6' onClick={(e) => AddBrinquedo(e.target.value)} variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='6' onClick={(e) => RmBrinquedo(e.target.value)} variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {comida1!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987726555063136266/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
        Continente Seleção Ração para Cão Adulto com Frango
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  17,99 €
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {comida1}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='1' onClick={(e) => AddComida(e.target.value)}  variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='1' onClick={(e) => RmComida(e.target.value)} variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {comida2!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987727537461399564/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          12kg pato e batata sem cereais Briantos Adult ração para cães
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço: 37,99€
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {comida2}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='2' onClick={(e) => AddComida(e.target.value)} variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='2' onClick={(e) => RmComida(e.target.value)}variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {comida3!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987727750704009217/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
         Ração Para Cão Purina One Mini Active Com Frango 1.5kg
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço: 5,99 €
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {comida3}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}}value ='3' onClick={(e) => AddComida(e.target.value)} variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}}value ='3' onClick={(e) => RmComida(e.target.value)}variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {comida4!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987727866059956224/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Ração Friskies Coelho Gato 1,5 kg
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  4,49 €
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {comida4}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='4' onClick={(e) => AddComida(e.target.value)}variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='5' onClick={(e) => RmComida(e.target.value)}variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {comida5!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987728051611791491/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
        É Continente Ração para Gato Adulto Carne 4kg
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  5,49€
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {comida5}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='5' onClick={(e) => AddComida(e.target.value)} variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}} value ='5' onClick={(e) => RmComida(e.target.value)}variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
      {comida6!=0 &&
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2vw'}}>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987728700160229426/unknown.png'} /> 

        </Grid>
        <Grid item xs={5} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Purina One Ração para Gato Adulto Frango
        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Preço:  11,39 €
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {comida6}
        </Grid>

        <Grid container item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <Button sx={{width:'10vw'}} value ='6' onClick={(e) => AddComida(e.target.value)}variant='outlined'> adicionar 1</Button>
          </Grid>
          <Grid item xs={12} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Button sx={{width:'10vw'}}value ='6' onClick={(e) => RmComida(e.target.value)}variant='outlined'> Remover 1</Button>
            
          </Grid>
        </Grid>    
      </Grid>
     }
     </List>
     </Grid>
      <Grid container item xs={12} sx={{pl:'2vw',pr:'2.9vw'}}>
        <Grid item xs={5} sx={{border:0 ,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          
        </Grid>

        <Grid item xs={2} sx={{border:0 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <Avatar variant ='square'sx={{height:'4vw',width:'4vw',alignItems:'center',justifyContent:'center'}}src={'https://cdn.discordapp.com/attachments/631543998422581248/987781167015141406/unknown.png'} /> 

        </Grid>
        <Grid item xs={2} sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex',height:'5vw'}}>
          Total: xx,xx €
        </Grid>
        <Grid item xs={2} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          QTD: {    Object.values(JSON.parse(localStorage.getItem('Comidas'))).reduce((a, b) => a + b)+Object.values(JSON.parse(localStorage.getItem('Brinquedos'))).reduce((a, b) => a + b)}
        </Grid>

        <Grid item xs={1} sx={{border:1 ,justifyContent:'center',alignItems:'center',display: 'flex'}}>
          <NavLink to='/checkout'>
          <Button variant='outlined'>Checkout</Button>
          </NavLink>
        </Grid>



      </Grid>
    </Grid>
</>

  )
}