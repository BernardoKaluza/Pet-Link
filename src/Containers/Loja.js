
import * as React from "react";
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';




export default function Loja () {
    
  
  const[brinquedos,brinquedosHook]= React.useState(true)
  const[comida,comidaHook]= React.useState(false)

  const [tipo, tipoHook] = React.useState('Comida');

  const setTipoCompras = (value) => {
    console.log(value)
    if (value =="Comida"){
      console.log("com")
      comidaHook(true)
      brinquedosHook(false)
      tipoHook(value)


    }
    if (value =="Brinquedos"){
      console.log("br")
      comidaHook(false)
      brinquedosHook(true)
      tipoHook(value)
    }
  };
  
  return(

    <>

    <Grid container sx={{pl:'240px'}}>

      <Grid item xs={3} sx={{border:1}}>
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
      <Grid item xs={9} sx={{border:1}}>

      </Grid>


      <Grid item xs={12} sx={{height:'40vw',border:1,pr:'1vw',pt:'1vw'}}>
        {brinquedos&&
        <List style={{maxHeight: '100%', overflow: 'auto'}} >
          <Grid container sx={{border:1}}>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
          </Grid>
        </List>
        }

        {comida&&
        <List style={{maxHeight: '100%', overflow: 'auto'}} >
           <Grid container sx={{border:1}}>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>
asdg
              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>
sh
              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>
sdfhsdh
              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

              </Grid>
            </Grid>
            <Grid container item xs={4} sx={{height:'20vw',border:1,alignItems:'center',justifyContent:'center',display:'flex',pr:'4vw',pl:'4vw'}}>
              <Grid item xs={12} sx={{border:1,height:'16vw'}}>

              </Grid>
              <Grid item xs={12}sx={{border:1,height:'4vw'}}>

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