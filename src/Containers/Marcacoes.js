
import * as React from "react";

import { Widget } from 'react-chat-widget';
import { useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import 'react-chat-widget/lib/styles.css';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {stores} from "../data/utentes"
import Calendario from '../components/calendario'



export default function Marcacoes (props) {
    
  const location = useLocation();
  const data = location.state;

  let img= stores[(stores.map(store => store.Name)).indexOf(data)].url; //find url da imagem a meter no ecra fuck off       ref: vai ver o utentes.js na data


  return(

    <>
    <Grid container sx={{paddingLeft:'240px',border:1,paddingBottom:'0vw'}} spacing={1}>
      <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={12}>
        <h2>{data}</h2>
      </Grid>
    </Grid>

    <Grid container sx={{paddingLeft:'240px',border:1}}>
      <Grid  sx={{height:'30vw', backgroundSize:'cover',border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={6}>
        <Calendario />
      </Grid>
      <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex',pl:'1vw',pr:'1vw'}}item xs={6}>
        <Paper elevation={4} sx={{flex:1}}>
      
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.43216833612!2d-8.635194748775476!3d41.19055071603515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465dc5eb9ba4d%3A0xbde1a6a1391d2bda!2sANIMALcare%20Hospital%20Veterin%C3%A1rio!5e0!3m2!1spt-PT!2spt!4v1655058508386!5m2!1spt-PT!2spt" width="100%" height="500" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        
        </Paper>
      </Grid>

    </Grid>

    </>




  )
}