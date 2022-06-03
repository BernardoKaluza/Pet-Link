import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Navbar2 from '../components/Navbar2'
import { stores } from '../data/utentes.js'
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';

function EscolhaClinica() {
  
    // return the initial state
    const [blockCas, blockCaseiro] = React.useState('');
    const [blockVet, blockVeterinario] = React.useState('');
    const [loja, setloja] = React.useState('');
 
  const handleBlockCas = (event,value) => {
    
    setloja(value);

    if (value != ""){

      blockCaseiro(true);
    }
    if(value ==""){

      blockCaseiro(false);
    }
  }

  const handleBlockVet = (event,value) => {

    setloja(value);


    if (value != ""){
      blockVeterinario(true);
    }
    if(value ==""){
      blockVeterinario(false);
    }
  }

  return (
    <React.Fragment>
      <Container sx={{justifyContent:'center',alignItems:'center',display:'flex',paddingTop:'2vw',pb:'3vw'}}>
        <h1 sx={{justifyContent:'center',alignItems:'center'}}>Selecione a clínica</h1>
      </Container>

        <Grid sx={{Width:"flex",justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={12}>
          <Autocomplete
            sx={{width:'50%', alignItems:'center', justifyContent:'center'}}
            freeSolo
            id="Search Name"
            disableClearable
            disabled = {blockVet}        
  
            onInputChange={ (event,value) => handleBlockCas(event,value) }

            options={stores.map((option) => option.Name)} //aqui muda se o atributo no utentes.js na oasta data
            renderInput={(params) => (
              <TextField
                clear
                {...params}
                label="Clínica veterinária"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        </Grid>

        <Grid sx={{height:'6vw',Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex',}} item xs={12}>
        <Box sx={{marginTop:'1.5vw'}}><h2> OU  </h2> </Box>
        </Grid>

        <Grid sx={{Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex'}} item xs={12}>

          <Autocomplete
            sx={{width:'50%'}}
            freeSolo
            id="Search Name"
            disableClearable
            disabled = {blockCas}        

            onInputChange={ (event,value) => handleBlockVet(event,value) }

            options={stores.map((option) => option.Name)} //aqui muda se o atributo no utentes.js na oasta data
            renderInput={(params) => (
              <TextField       
                {...params}
                label="Serviços Caseiros"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />

        </Grid>
        <Grid sx={{paddingTop:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}} container spacing={4} item xs={12}>
          <Grid item xs={12} sx ={{justifyContent:'center',alignItems:'center',display:'flex'}}>
            <NavLink to = '/Marcacoes' state= { loja } >
              <Button variant='contained'>
                  Pesquisar
              </Button>
            </ NavLink>
          </Grid>
        </Grid>
    </React.Fragment>
  );
}


export default EscolhaClinica;