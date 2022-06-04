import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Containers/Home'
import Perfil from './Containers/Perfil'
import Cart from './Containers/Cart'
import Consultas from './Containers/Consultas';
import Loja from './Containers/Loja';
import Marcacoes from './Containers/Marcacoes'
import Login from './Containers/Login'

import Register from './Containers/Register';

import EscolhaClinica from './Containers/EscolhaClinica';

import Navigation from './components/navigation';

import DarConsulta from './Containers/DarConsulta';

import VistaVeterinario from './Containers/VistaVeterinario';



import { ThemeProvider, createTheme} from '@mui/material/styles';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ea6a47',
    },
    secondary: {
      main: '#0091d5',
    },
  },
});


function App() {
  
    var local = (localStorage.getItem('login'))
    if ( local === null) {
      var [login, setLogin] = React.useState(false);
      localStorage.setItem('login', false)
    }
    else {
      var [login, setLogin] = React.useState(local);
      localStorage.setItem('login', login)
    }
  
 
  return (
   
    <ThemeProvider theme={theme}>
    <Router>

     { login && <Navigation setLogin={setLogin} /> } {/* //! TROCAR PARA LOGIN */}
     
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/Perfil' element={<Perfil/>} />
      <Route path='/Login' element={<Login setLogin={setLogin}/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Consultas' element={<Consultas/>} />
      <Route path='/Loja' element={<Loja/>} />
      <Route path='/Marcacoes' element={<Marcacoes />} />
      <Route path='/EscolhaClinica' element={<EscolhaClinica/>} />
      <Route path='/DarConsulta' element={<DarConsulta/>} />
      <Route path='/VistaVeterinario' element={<VistaVeterinario/>} />


      

      </Routes>
    </Router>
    </ThemeProvider>
  );

}

export default App;
