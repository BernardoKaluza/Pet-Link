import * as React from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ChatBot from 'react-simple-chatbot';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';

import { ThemeProvider } from 'styled-components';

import Navigation from '../components/navigation'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import selectcao from "../features/caes/CaesSlice";
import { addcao, deletecao } from "../features/caes/CaesSlice";

export default function Home () {

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

  const steps = [
    {
      id: '0',
      options: [
        { value: 'Necessito de ajuda', label: 'Necessito de ajuda!', trigger: '1' },],
      hideInput: true,
    },
    {
      id: '1',
      message: 'Olá, como posso ajudar?',
      trigger: '2',
    },
    {
      id: '2',
      message: "1- Contactar um veterinário",
      trigger: '3',
      delay: 1000,
    },
    {
      id: '3',
      message: "2- Ver as perguntas frequentes",
      trigger: '4',
      delay:0,
    },
    {
      id: '4',
      options: [
        { value: 'Necessito de contactar um veterinário', label: '1', trigger: '5' },
        { value: 'Quero ver as perguntas frequentes', label: '2', trigger: '6' },
      ],
    },
    {
      id: '5',
      message: "Um veterinário entrará em contacto brevemente... ",
      trigger: '7',
    },
    {
      id: '6',
      message: "vou redirecioná-lo/a para a página de perguntas frequentes... ",
      trigger: '4',
    },
    {
      id: '7',
      message: "Com que animal necessita de ajuda? ",
      trigger:'9'
    },
    {
      id: '9',
      options: [
        { value: 1, label: '1', trigger: '8' },
        { value: 2, label: '2', trigger: '8' },
        { value: 3, label: '3', trigger: '8' },
      ],
    },


    {
      id: '8',
      message: "Olá, como posso ajudar?",
      avatar: 'https://www.aavmc.org/wp-content/uploads/2020/09/babylak-for-cc.jpg',
      trigger:'10',
    },
    {
      id: '10',
      user: true,
      trigger:'10'
    },

  ];

  const dispatch = useDispatch();
  const animais = useSelector(state => state.caes.caes);
  console.log(animais);


  const [page, setPage] = React.useState(1);
  const [vacinapopup,toggleVacinaHook] = React.useState('false')
  const [numeroAnimais,numeroAnimaisHook] = React.useState(animais.length)
  const[addPopup,addPopupHook] = React.useState('false')
  const[remPopup,remPopupHook] = React.useState('false')

  const[nomeAnimal,nomeAnimalHook] = React.useState('')
  const[PesoAnimal,PesoAnimalHook] = React.useState('')
  const[ChipAnimal,ChipAnimalHook] = React.useState('')
  const[RacaAnimal,RacaAnimalHook] = React.useState('')
  const[EspecieAnimal,EspecieAnimalHook] = React.useState('')
  const[URLAnimal,URLAnimalHook] = React.useState('')






  
  const backgroundImage = ( animais[page-1].url );

  const setNome = (value) => {
    nomeAnimalHook(value);
  };

  const setPeso = (value) => {
    PesoAnimalHook(value);
  };

  const setChip = (value) => {
    ChipAnimalHook(value);
  };
  const setRaca = (value) => {
    RacaAnimalHook(value);
  };
  const setEspecie = (value) => {
    EspecieAnimalHook(value);
  };

  const setURL = (value) => {
    URLAnimalHook(value);
  };


  const toggleRemPopup = () => {
    remPopupHook(!remPopup);
  };

  const toggleAddPopup = () => {
    console.log("toggleAddPopup")
    addPopupHook(!addPopup);
  };

  const addAnimalConfirm = (event,value) => {
    //mandar para a base de dados os dados

    addAnimal()
    nomeAnimalHook('')
    PesoAnimalHook('')
    ChipAnimalHook('')
    RacaAnimalHook('')
    EspecieAnimalHook('')
    addPopupHook(!addPopup);
  };

  const remAnimalConfirm = (event,value) => {
    //remove da base de dados os dados
    console.log("remove")
    console.log(value)
    removerAnimal()
    remPopupHook(!remPopup);
  };
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  const toggleVacina = () =>{
    toggleVacinaHook(!vacinapopup)
  }


  const addAnimal = (animal) =>{

    if (numeroAnimais == 3 ){
      return;
    }
    console.log(nomeAnimal)
    const thisAnimal = {   
      Animal : numeroAnimais + 1, 
      Tratamento : "", 
      Nutricao : "", 
      Nome :nomeAnimal,
      Peso : PesoAnimal,
      UltimaConsulta : "",
      Chip : ChipAnimal,
      Raca : RacaAnimal,
      Especie : RacaAnimal,
      url : URLAnimal
    }

    dispatch(addcao(thisAnimal));
    numeroAnimaisHook(numeroAnimais + 1);
    console.log(numeroAnimais);
  }

  const removerAnimal = () =>{

    if (numeroAnimais == 1){
      return;
    }

    const thisAnimal = {   
      Animal : animais[page-1].Animal
    };

    dispatch(deletecao(thisAnimal));
    numeroAnimaisHook(numeroAnimais - 1);

    if (page !== 1) {
      setPage(page-1);
    }
    else{
      
    }
  }

  return(
    <>

    <Grid container sx={{paddingLeft:'240px',border:0,paddingBottom:'1vw'}} spacing={1}>

      <Grid sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={8}>
        <Pagination size="large" count={numeroAnimais} page={page} onChange={handleChange} sx={{ pl:'30vw',display:"flex" }}/>
      </Grid>

      <Grid sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={2}>
        <Button variant ="contained" onClick={toggleAddPopup}>
          Adicionar Animal
            
        </Button>
        {
        <Dialog onClose={toggleAddPopup} open={!addPopup} >
            <Box sx={{pt:'0.5vw',pb:'1vw',pr:'1vw',pl:'1vw'}}>
              <DialogTitle>
                  Adicionar Animal
              </DialogTitle>
                <DialogContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        onChange={(e) => setNome(e.target.value)}
                        label="Nome do Animal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        onChange={(e) => setPeso(e.target.value)}
                        label="Peso do Animal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        onChange={(e) => setChip(e.target.value)}
                        label="Chip do animal"
                      />
                    </Grid>
                    <Grid item xs={6}>

                      <TextField
                        onChange={(e) => setRaca(e.target.value)}
                        label="Raça do Animal"
                      />    
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        onChange={(e) => setEspecie(e.target.value)}
                        label="Especie do Animal"
                      /> 
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        onChange={(e) => setURL(e.target.value)}
                        label="URL da Imagem"
                      />  
                    </Grid>

                  </Grid>
                </DialogContent>
              <Grid container sx={{pt:'0.5vw'}}>

                <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button onClick={addAnimalConfirm} variant="outlined">
                    Adicionar
                  </Button>
                </Grid>

                <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button variant="outlined" onClick={toggleAddPopup}>
                    Cancelar
                  </Button>
                </Grid>    

              </Grid>
            </Box>
            </Dialog>
            }
      </Grid>
      <Grid sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={2}>
        <Button variant ="contained" onClick={toggleRemPopup}>
          Remover Animal
         
        </Button>
        {
          <Dialog onClose={toggleRemPopup} open={!remPopup} >
            <Box sx={{pt:'0.5vw',pb:'1vw',pr:'1vw',pl:'1vw'}}>
              <DialogTitle>
                  Remover Animal
              </DialogTitle>
            
              <Grid container sx={{pt:'0.5vw'}}>

                <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button onClick={remAnimalConfirm} variant="outlined">
                    Confirmar
                  </Button>
                </Grid>

                <Grid item xs={6} sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
                  <Button variant="outlined" onClick={toggleRemPopup}>
                    Cancelar
                  </Button>
                </Grid>    

              </Grid>
            </Box>
          </Dialog>
            }
      </Grid>

    </Grid>

      <Grid container sx={{paddingLeft:'240px',border:0}}>
        <Grid  sx={{height:'30vw', backgroundSize:'cover',border:0,alignItems:'center',justifyContent:'center',display:'flex'}}item xs={6}>
          <Avatar variant ='square'sx={{height:'99%',width:'99%'}}src={backgroundImage} />
        </Grid>

        <Grid sx={{border:0,alignItems:'center',justifyContent:'center',display:'flex',pl:'1vw',pr:'1vw'}}item xs={6}>
          <Paper elevation={4} sx={{flex:1}}>

              <List>
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
        </Grid>
        <ThemeProvider theme={theme}>
        <ChatBot  placeholder={"Escreva uma mensagem..."} userAvatar={"https://cdn.discordapp.com/attachments/956588523752931368/983050617230610472/avatar2.jpg?size=4096"} steps={steps} floating={true} />;

      </ThemeProvider>
    </>
  )
}