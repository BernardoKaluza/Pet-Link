import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Containers/Home'
import Perfil from './Containers/Perfil'
import Cart from './Containers/Cart'
import Consultas from './Containers/Planos';
import Loja from './Containers/Loja';
import Marcacoes from './Containers/Marcacoes'
import Login from './Containers/Login'

import Register from './Containers/Register';

import EscolhaClinica from './Containers/EscolhaClinica';

import Navigation from './components/navigation';

import DarConsulta from './Containers/DarConsulta';

import VistaVeterinario from './Containers/VistaVeterinario';

import Navigation2 from './components/navigation2';

import Checkout from './Containers/Checkout'

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

  const [login, setLogin] = React.useState(JSON.parse(localStorage.getItem('login')));
  console.log(login + 'login')
  const[vet, setVet] = React.useState(false);
  

  const [cartcount,setCart] = React.useState(JSON.parse(localStorage.getItem('cartcount')));

  



  if (login === false) {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
          
            <Route path='/Login' element={<Login setLogin={setLogin} setVet={setVet} />} />
            <Route path='/Register' element={<Register/>} />
            <Route path='*' element={<Login setLogin={setLogin} setVet={setVet} />} />
            <Route path='/Checkout' element ={<Checkout/>}/>


          </Routes>
        </Router>
      </ThemeProvider>
    )
  }


  
  else if (vet === false) {
    console.log(login)
    return (
    
      <ThemeProvider theme={theme}>
      <Router>

      { login && <Navigation setLogin={setLogin} cart={cartcount} /> } {/* //! TROCAR PARA LOGIN */}
      
        <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Perfil' element={<Perfil/>} />
        <Route path='/Cart' element={<Cart setCart={setCart} cart={cartcount} />} />
        <Route path='/Consultas' element={<Consultas/>} />
        <Route path='/Loja' element={<Loja setCart={setCart} cart={cartcount}/>} />
        <Route path='/Marcacoes' element={<Marcacoes />} />
        <Route path='/EscolhaClinica' element={<EscolhaClinica/>} />
        <Route path='/DarConsulta' element={<DarConsulta/>} />
        <Route path='/VistaVeterinario' element={<VistaVeterinario/>} />
        
        <Route path='/Checkout' element ={<Checkout/>}/>


        

        </Routes>
      </Router>
      </ThemeProvider>
    );
  }
  else {
    return(
      <ThemeProvider theme={theme}>
      <Router>

      { login && <Navigation2 setLogin={setLogin} /> } {/* //! TROCAR PARA LOGIN */}
      
        <Routes>
        <Route path='/' element={<VistaVeterinario/>} />
        <Route path='/Home' element={<VistaVeterinario/>} />
        <Route path='/DarConsulta' element={<DarConsulta/>} />
        <Route path='/VistaVeterinario' element={<VistaVeterinario/>} />
        <Route path='*' element={<vistaVeterinario/>} />


        

        </Routes>
      </Router>
      </ThemeProvider>

    )
  }

}

export default App;
