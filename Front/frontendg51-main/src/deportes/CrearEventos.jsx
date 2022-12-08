import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import Card from 'react-bootstrap/Card';


//const URI = 'http://localhost:8000/usuarios/regevento'
const URI = 'https://app-g51gh.herokuapp.com/usuarios/regevento'
export const CompCreateEvento = () => {
 
    const [fecha, setFecha] = useState('')
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')
    const [marcador1, setMarcador1] = useState('')
    const [marcador2, setMarcador2] = useState('')
    const [tipoevento, setTipoevento] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {fecha: fecha, equipo1: equipo1, equipo2: equipo2, marcador1:marcador1, marcador2: marcador2, tipoevento:tipoevento })
        navigate('/shevento')
    }   
    return (
        <div className="login-form" >
           
           <Card style={{ width: '40rem' }}>
                    <Card.Body>
                    <h3>Creación de Eventos Deportivos</h3>
           <Form onSubmit={store}>
           <Form.Group className="mb-3" >
               <div>
                    <Form.Control
                        value={fecha}
                        onChange={ (e)=> setFecha(e.target.value)} 
                        type="text"
                        placeholder = "Ingrese la fecha año/mes/dia"
                       
                    />                                           
                </div>
                <div>
                     <Form.Control
                        value={equipo1}
                        onChange={ (e)=> setEquipo1(e.target.value)} 
                        type="text"
                        placeholder = "Ingrese Equipo 1"
                       
                     />                      
                 </div>
                 <div>
                     <Form.Control 
                        value={equipo2}
                        onChange={ (e)=> setEquipo2(e.target.value)} 
                        type = "text"
                        placeholder = "Ingrese Equipo 2 "
                        
                      />                 
                 </div>

                 <div>
                     <Form.Control
                        value={marcador1}
                        onChange={ (e)=> setMarcador1(e.target.value)} 
                        type = "text"
                        placeholder = "Ingrese Marcador E1 "
                        
                      />                 
                 </div>
                 <div>
                     <Form.Control
                        value={marcador2}
                        onChange={ (e)=> setMarcador2(e.target.value)} 
                        type = "text"
                        placeholder = "Ingrese Marcador E2 "
                        
                      />                 
                 </div>
                 <div>
                     <Form.Control
                        value={tipoevento}
                        onChange={ (e)=> setTipoevento(e.target.value)} 
                        type = "text"
                        placeholder = "Evento deportivo "
                        
                      />                 
                 </div>
               
                 <Button variant="primary" size="lg" type="submit" >Guardar</Button> 
                
                 </Form.Group>                 
           </Form>
           </Card.Body>
           </Card>
        </div>
    )
}

export default CompCreateEvento