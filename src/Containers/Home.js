import * as React from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';







import Navigation from '../components/navigation'


export default function Home () {
    
  const backgroundImage = require("../image/husky.jpg");


  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return(
    <>
  
    <Grid container sx={{paddingLeft:'240px',border:1,paddingBottom:'1vw'}} spacing={1}>

      <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={4}>
        <Pagination count={3} page={page} onChange={handleChange} sx={{ display:"flex" }}/>
      </Grid>

      <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={2}>
        <Button variant ="contained">
          Adicionar Animal
        </Button>
      </Grid>
      <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={2}>
        <Button variant ="contained">
          Remover Animal
        </Button>
      </Grid>
      <Grid sx={{border:1,alignItems:'center',justifyContent:'right',display:'flex',paddingRight:'1vw'}}item xs={4}>
        <Button  variant ="contained">
          Atualizar Dados
        </Button>
      </Grid>
    </Grid>

      <Grid container sx={{paddingLeft:'240px',border:1}}>
        <Grid  sx={{backgroundImage: `url(${backgroundImage})`,height:'30vw', backgroundSize:'cover',border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={5}>
          {/* <img sx={{display:'flex' }}src={require("../image/husky.jpg")} /> */}
        </Grid>
        <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={4}>
        
        <Paper elevation={24} sx={{flex:1}}>
          <Stack spacing ={2}>
            <h2>Dados Animal:</h2>
            <h2>Peso : 15kg</h2>
            <Stack sx={{alignItems:'center',justifyContent:'center',display:'flex'}} direction='row'><h2>Vacinado</h2>
              <Avatar on sx={{display:'flex' }}src={require("../image/bell.png")} />
            </Stack>
            <h2>Dados Animal</h2>
            <h2>Dados Animalllllllllllllllllllllll</h2>
            <h2>Dados Animal</h2>
          </Stack>
        </Paper>
        </Grid>
        <Grid sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={3}>
     

        </Grid>
      </Grid>

      <Grid container sx={{paddingLeft:'240px',border:1}}>
        <Grid item sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}} xs={9}>
          <h2>9</h2>
        </Grid>
        <Grid container item sx={{border:1,alignItems:'center',justifyContent:'center',display:'flex'}} xs={3} spacing={2}>
            <Grid sx={{border:1}} item xs={6}>
              <Button variant ="contained">
                Conversas Anteriores
              </Button>
            </Grid>
          <Grid sx={{paddingRight:'1vw'}}item xs={6}>
            <Button  variant ="contained">
              Contactar Veterinários
            </Button>
          </Grid>
        </Grid>
      </Grid>


    </>
  )
}