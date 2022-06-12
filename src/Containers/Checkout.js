import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { stores } from '../data/utentes.js'
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import { Link } from 'react-router-dom';

function EscolhaClinica() {
  


  return (
    <>
    <Grid container sx={{pl:'20vw',pr:'10vw'}}>
        <Grid item xs={12} sx={{bgcolor:'#ea6a47',alignItems:'center',justifyContent:'center',display:'flex',height:'4.5vw',color:'#fff'}}>
            Checkout
        </Grid>
        <Grid item xs={12} sx={{borderLeft:1,borderRight:1,alignItems:'center',borderColor:'#ea6a47',justifyContent:'center',display:'flex',flex:1,pb:'1vw',pt:'1vw',pr:'1vw',pl:'1vw'}}>
            <TextField sx={{flex:1}}
                //onChange={(e) => setNome(e.target.value)}
                label="Número do Cartão"
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sx={{borderLeft:1,borderRight:1,borderColor:'#ea6a47',alignItems:'center',justifyContent:'center',display:'flex',pb:'1vw',pr:'1vw',pl:'1vw'}}>
            <TextField sx={{flex:1}}
                //onChange={(e) => setNome(e.target.value)}
                label="Nome no Cartão"
            />
        </Grid>
        <Grid item xs={6} sx={{borderLeft:1,alignItems:'center',borderColor:'#ea6a47',justifyContent:'center',display:'flex',pb:'1vw',pr:'0.5vw',pl:'1vw'}}>
            <TextField sx={{flex:1}}
                //onChange={(e) => setNome(e.target.value)}
                label="Data de expiração"
            />
        </Grid>
        <Grid item xs={6} sx={{borderRight:1,alignItems:'center',borderColor:'#ea6a47',justifyContent:'center',display:'flex',pb:'1vw',pl:'0.5vw',pr:'1vw'}}>
            <TextField sx={{flex:1}}
                //onChange={(e) => setNome(e.target.value)}
                label="CVV"
            />
        </Grid>
        <Grid item xs={12} sx={{borderLeft:1,borderRight:1,borderColor:'#ea6a47',alignItems:'center',justifyContent:'center',display:'flex',pb:'1vw',pr:'1vw',pl:'1vw'}}>
            <TextField sx={{flex:1}}
                //onChange={(e) => setNome(e.target.value)}
                label="Morada"
            />
        </Grid>
    </Grid>
    <Grid container sx={{pl:'20vw',pr:'10vw',height:'4.5vw'}}>
        <Grid item xs={2} sx={{border:3,borderRight:0,borderColor:'#0091d5',alignItems:'center',justifyContent:'center',display:'flex'}}>
            <Box sx={{borderRight:1,flex:1,height:'3vw',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Avatar variant ='square'sx={{height:'80%',width:'26%'}} src={"https://cdn.discordapp.com/attachments/631543998422581248/985592670674124800/transferir.png?size=4096"}/>
            </Box>
        </Grid> 

        <Grid item xs={8} sx={{border:3,borderRight:0,borderLeft:0,borderColor:'#0091d5',alignItems:'center',justifyContent:'center',display:'flex',pr:'1vw',pl:'1vw'}}>

                <Button variant="outlined"sx={{flex:1}} component={Link} to="/some-route" >
                    Pagar
                </Button>

        </Grid>
        <Grid item xs={2} sx={{border:3,borderLeft:0,borderColor:'#0091d5',alignItems:'center',justifyContent:'center',display:'flex',pr:'1vw'}}>
            <Box sx={{borderLeft:1,flex:1,height:'3vw',alignItems:'center',justifyContent:'left',display:'flex',pl:'1vw',fontFamily: 'sans-serif'}}>
                Total: xx.xx $
            </Box>
        </Grid>
    </Grid>
    </>

  );
}


export default EscolhaClinica;