import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CompCreateUser } from './deportes/Crearusuarios.jsx'
import { CompShowUsers } from './deportes/Mostrarusuarios.jsx'
import { CompEditUser } from './deportes/Editarusuario.jsx'
import { CompCreateEvento } from './deportes/CrearEventos.jsx'
import {CompMostrarEvento} from './deportes/Mostrareventos.jsx'
import {CompEditEvento} from './deportes/EditarEvento.jsx'
import {Logo} from './deportes/Logo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBarComp} from './deportes/NavbarComp'
import {Login} from './deportes/Login.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
              
      </header>

      <BrowserRouter>
                      <Routes>
                               <Route path="/" element= {<NavBarComp />} >
                                      <Route path='/create' element={ <CompCreateUser />} />
                                      <Route path='/users' element ={ <CompShowUsers />} />
                                      <Route path='/edit/:id' element= {<CompEditUser />} />
                                      <Route path='/login' element= {<Login />} />
                                      <Route path='/regevento' element= { <CompCreateEvento />} />
                                      <Route path='/shevento' element = { <CompMostrarEvento />} />
                                      <Route path='/editevento/:_id' element = {<CompEditEvento />} />
                                      <Route path='*' element={ <Navigate replace to="/"/> }/>
                               </Route> 
                      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
