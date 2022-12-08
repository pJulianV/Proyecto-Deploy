import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import Card from 'react-bootstrap/Card';
//import '../../src/style.css';
//import '../style.css';

//const URI = 'http://localhost:8000/usuarios/reguser'
const URI = ' https://app-g51gh.herokuapp.com/usuarios/reguser'
export const CompCreateUser = () => {

   
 
    const [correo, setContent] = useState('')
    const [nomuser, setUsuario] = useState('')
    const [password, setPass] = useState('')
    const navigate = useNavigate()    
   
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Guardar Usuario',
            text: 'Esta seguro de guardar su información?',
            icon: 'question',
            showDenyButton: true,
            denyButtonText: "NO",
            confirmButtonText:"SI",
          
        }).then( response =>{
            if(response.isConfirmed){
                axios.post(URI, {correo:correo, nomuser: nomuser, password: password})
                Swal.fire("la información fue almacenada con exito")
                navigate('/users')
                
            }else{
                Swal.fire("Ingrese una nueva información")
            }
        })

     
    }   
    return (
        <div className="login-form">
           
           <Card style={{ width: '40rem' }}>
                    <Card.Body>
                    <h3>Creación de  Usuarios</h3>
           <Form onSubmit={store}>
           <Form.Group className="mb-3" >
               <div>
              
                    <Form.Control
                        value={nomuser}
                        onChange={ (e)=> setUsuario(e.target.value)} 
                        type="text"
                        placeholder = "Ingrese su nombre"
                       
                    />                                           
                </div>
                <div>
              
                     <Form.Control
                        value={correo}
                        onChange={ (e)=> setContent(e.target.value)} 
                        type="email"
                        placeholder = "email"
                       
                     />                      
                 </div>
                 <div>
                 
                     <Form.Control
                        value={password}
                        onChange={ (e)=> setPass(e.target.value)} 
                        type = "password"
                        
                        placeholder = "Password"
                        
                      />                 
                 </div>
                 <Button  variant="primary" type="submit" className="btn-register">Guardar</Button>                  
           </Form.Group>
           </Form>
           </Card.Body>
           </Card>
        </div>
    )
}

export default CompCreateUser