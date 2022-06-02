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

import Navigation from './components/navigation'

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
  const [login, setLogin] = React.useState(false);
  return (

    <ThemeProvider theme={theme}>
    <Router>

     { true && <Navigation /> } {/* //! TROCAR PARA LOGIN */}
     
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/Perfil' element={<Perfil/>} />
      <Route path='/Login' element={<Login setLogin={setLogin}/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Consultas' element={<Consultas/>} />
      <Route path='/Loja' element={<Loja/>} />
      <Route path='/Marcacoes' element={<Marcacoes/>} />
      

      </Routes>
    </Router>
    </ThemeProvider>
  );

}

export default App;
