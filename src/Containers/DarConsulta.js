import * as React from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';

import Navigation from '../components/navigation'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import List from '@mui/material/List';

import { updatecao } from "../features/caes/CaesSlice";
import {useDispatch, useSelector} from "react-redux";

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';



export default function DarConsulta () {

  const animais = useSelector(state => state.caes.caes);
  const dispatch = useDispatch();
  const [tratamento, settratamento] = React.useState(animais[0].Tratamento);
  const [nutricao, setnutricao] = React.useState(animais[0].Nutricao);
  const [page, setPage] = React.useState(1);
  const [vacinapopup,toggleVacinaHook] = React.useState('false')
  const [numeroAnimais,numeroAnimaisHook] = React.useState(parseInt(localStorage.getItem('numeroAnimais')))

  const handleChange = (event, value) => {
    setPage(value);
  };

  const setTratamento = (e) => {
    settratamento(e);

    let thisAnimal = {   
      Animal : 1, changes: [{Tratamento: e}]
    }

    dispatch(updatecao(thisAnimal));
  }
  const setNutricao = (e) => {
    setnutricao(e);
    let thisAnimal = {   
      Animal : 1, changes: [{Nutricao: e}]
    }
    dispatch(updatecao(thisAnimal));
  }

  const toggleVacina = () =>{
    toggleVacinaHook(!vacinapopup)
  }

 

  return(
    <>
    <Grid container sx={{paddingLeft:'240px',border:0}} spacing={1}>
      <Grid container item xs={8} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
        
        <Grid container item xs={12}>
            <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
              <Avatar variant ='square'sx={{height:'11vw',width:'11vw'}}src={animais[0].url} /> 
            </Grid>
          <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
            <Stack>
                <Button variant="outlined">Atualizar ficha</Button>
            </Stack>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{pr:'1vw',pb:'1vw',pt:'1vw',pl:'1vw'}}>
          <Paper elevation={4} sx={{flex:1}}>
            <Stack sx={{flex:1}}>
                <Grid container  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <Grid item xs={2}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                        
                    </Grid>
                    <Grid item xs={10}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'5vw'}}>
                        <h1>Plano de tratamento</h1>
                    </Grid>
                </Grid>
                <TextField
                sx={{pr:'2vw',pl:'2vw',pb:'2vw'}}
                id="filled-multiline-static"
                multiline
                onChange={(e) => setTratamento(e.target.value)}
                rows={6}
                defaultValue= { animais[0].Tratamento }
                variant="filled"
                />
            </Stack>
          </Paper>
        </Grid>    

        <Grid item xs={12} sx={{pr:'1vw',pb:'1vw',pl:'1vw'}}>
          <Paper elevation={4} sx={{flex:1}}>
            <Stack sx={{flex:1}}>
                <Grid container  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <Grid item xs={2}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>

                    </Grid>
                    <Grid item xs={10}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex',pr:'5vw'}}>
                        <h1>Plano Nutricional</h1>
                    </Grid>
                </Grid>
                <TextField
                sx={{pr:'2vw',pl:'2vw',pb:'2vw'}}
                id="filled-multiline-static"
                multiline
                onChange={(e) => setNutricao(e.target.value)}
                rows={6}
                defaultValue= { animais[0].Nutricao }
                variant="filled"
                
                />
            </Stack>
          </Paper>
        </Grid>

        </Grid>


      <Grid container item xs={4} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>

        <Grid item xs={12} >
        <Paper elevation={4} sx={{flex:1}}>
            
        <List sx={{maxHeight:"26.8vw", overflow: "auto"}}>
                <ListItem>
                  <ListItemText
                    primary="Dados:"
                  />
                  <Divider />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Nome:"
                    secondary={animais[page-1].Nome}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Peso:"
                    secondary={animais[page-1].Peso}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Última Consulta:"
                    secondary={animais[page-1].UltimaConsulta}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Chip?"
                    secondary={animais[page-1].Chip}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Raça:"
                    secondary={animais[page-1].Raca}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Espécie:"
                    secondary={animais[page-1].Especie}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Vacinas:"
                    secondary= {<div onClick={toggleVacina}>
                    <Avatar on sx={{display:'flex' }}src={require("../image/bell.png")} />
                      <paper >
                        <Dialog onClose={toggleVacina} open={!vacinapopup} >
                          <DialogTitle>
                              Vacinas
                          </DialogTitle>
                            <h2>Vacina 1</h2>
                            <h2>Vacina 3</h2>
                            <h2>Vacina 4</h2>
                            <h2>Vacina 5</h2>


                        </Dialog>
                      </paper>
                  </div>}
                  />
                </ListItem>


              </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={4} sx={{flex:1}}>
            <Stack sx={{flex:1}}>
                <Grid container  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <Grid item xs={12}  sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                        <h1>Notas</h1>
                    </Grid>
                </Grid>
                <TextField
                sx={{pr:'2vw',pl:'2vw',pb:'2vw'}}
                id="filled-multiline-static"
                multiline
                rows={6}
                defaultValue= ""
                variant="filled"
                />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
        
   
     
    </>
  )
}