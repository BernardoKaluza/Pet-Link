
import * as React from "react";

import { Widget } from 'react-chat-widget';
import { useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import 'react-chat-widget/lib/styles.css';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import {stores} from "../data/utentes"
import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';

import Navigation from '../components/navigation'

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
        a
      </Grid>
      <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex',pl:'1vw',pr:'1vw'}}item xs={6}>
        <Paper elevation={4} sx={{flex:1}}>
         <img src={img} /> {/* ref: linha 30 */}
        </Paper>
      </Grid>

    </Grid>

    </>




  )
}