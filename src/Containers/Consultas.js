
import * as React from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { planos } from "../data/planos";




export default function Consultas () {
    
  
  const backgroundImage = require("../image/husky.jpg");


  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  let nanimais = localStorage.getItem("numeroAnimais");
  

  
  
  return(

    <>
      <Grid container sx={{paddingLeft:'240px',border:0}} spacing={1}>
        <Grid sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={4}>
          <Pagination count={ nanimais } page={page} onChange={handleChange} sx={{ display:"flex" }}/>
        </Grid>


        <Grid xs={12}sx={{ flex:1,border:0,alignItems:'center',justifyContent:'center',display:'flex',pt:'3vw',pl:'3vw',pr:'3vw'}}>
          <Paper elevation={4} sx={{flex:1}}>
            <Stack sx={{flex:1}}>
              <Container sx={{flex:1,border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                <h1>Plano de tratamento</h1>
              </Container>
                <TextField
                  sx={{pr:'2vw',pl:'2vw',pb:'2vw'}}
                  id="filled-multiline-static"
                  disabled
                  multiline
                  rows={6}
                  defaultValue={  planos[(planos.map(plano => plano.Animal)).indexOf(page)].Tratamento }
                  variant="filled"

                 

                />
            </Stack>
          </Paper>
        </Grid>

        <Grid xs={12}sx={{flex:1,border:0,alignItems:'center',justifyContent:'center',display:'flex',pt:'3vw',pl:'3vw',pr:'3vw'}}>
          <Paper elevation={4} sx={{flex:1}}>
            <Stack sx={{flex:1}}>
              <Container sx={{flex:1,border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                <h1>Plano Nutricional</h1>
              </Container>
                <TextField
                  sx={{pr:'2vw',pl:'2vw',pb:'2vw'}}
                  id="filled-multiline-static"
                  disabled
                  multiline
                  rows={6}
                  defaultValue={  planos[(planos.map(plano => plano.Animal)).indexOf(page)].Nutricao }
                  variant="filled"
                />
            </Stack>
          </Paper>
        </Grid>
        
      </Grid>
    </>
  )
}