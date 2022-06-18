
import React from "react";

import { Widget } from 'react-chat-widget';
import { useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import 'react-chat-widget/lib/styles.css';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {stores, hospitals} from "../data/utentes"
import Calendario from '../components/calendario'



export default function Marcacoes (props) {
    
  const location = useLocation();
  const data = location.state;
  var url;
  if (data=="Animal Care"){
    url=stores[0].url
  }
  else {
    url=hospitals[0].url
  }

  //let img= stores[(stores.map(store => store.Name)).indexOf(data)].url; //find url da imagem a meter no ecra fuck off       ref: vai ver o utentes.js na data


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
      
          {/* <iframe source is var url */}

          
          <iframe src={url} width="100%" height="500" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </Paper>
      </Grid>

    </Grid>

    </>




  )
}