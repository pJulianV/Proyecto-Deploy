import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
//Ruta para modificar "Actualizar" el evento
//const URI = 'http://localhost:8000/usuarios/upevento/'
const URI = 'https://app-g51gh.herokuapp.com/usuarios/upevento/'
//Ruta para mostra la información del evento deportivo antes de modificarlo
//const URI2 = 'http://localhost:8000/usuarios/shevento/'
const URI2 = 'https://app-g51gh.herokuapp.com/usuarios/shevento/'

export const CompEditEvento = () => {
    const [fecha, setFecha] = useState('')    
    const [equipo1, setEquipo1] = useState('')   
    const [equipo2, setEquipo2] = useState('') 
    const [marcador1, setMarcador1] = useState('') 
    const [marcador2, setMarcador2] = useState('')   
    const [tipoevento, setTipoevento] = useState('') 

    const navigate = useNavigate()
    const {_id} = useParams()
    console.log('el valor del id es : ', _id)
    //procedimiento para actualizar
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(URI+_id, {
            fecha: fecha,
            equipo1: equipo1,
            equipo2: equipo2,
            marcador1: marcador1,
            marcador2: marcador2,
            tipoevento:tipoevento
        })
        navigate('/shevento')
    }

  

    const getBlogById = async () => {
        const res = await axios.get(URI2+_id)
        setFecha(res.data.fecha)
        setEquipo1(res.data.equipo1)
        setEquipo2(res.data.equipo2)
        setMarcador1(res.data.marcador1)
        setMarcador2(res.data.marcador2)
        setTipoevento(res.data.tipoevento)
    }

    useEffect( ()=>{
        getBlogById()
     },[ ] )
    return (
        <div className="login-form">
        <h3>Editar Eventos Deportivos</h3>
        <Card>
        <Card.Body>
        <Form>
                <div>
                <label >Fecha</label>
                <input
                    value={fecha}
                    onChange={ (e)=> setFecha(e.target.value)}
                    type="text"
                                         
                />
            </div>
            <div>
                <label>Equipo1</label>
                <input
                    value={equipo1}
                    onChange={ (e)=> setEquipo1(e.target.value)} 
                    type="text"
                   
                />
            </div>
       
            <div>
                <label >Equipo2</label>
                <input
                    value={equipo2}
                    onChange={ (e)=> setEquipo2(e.target.value)}
                    type="text"
                                       
                />
            </div>    
            <div>
                <label >Marcador E1</label>
                <input
                    value={marcador1}
                    onChange={ (e)=> setMarcador1(e.target.value)}
                    type="text"
                                       
                />
            </div>  
            <div>
                <label >Marcador E2</label>
                <input
                    value={marcador2}
                    onChange={ (e)=> setMarcador2(e.target.value)}
                    type="text"
                                       
                />
            </div>  
            <div>
                <label >Tipo Evento</label>
                <input
                    value={tipoevento}
                    onChange={ (e)=> setTipoevento(e.target.value)}
                    type="text"
                                       
                />
            </div>          
            <Button type="submit" onClick={onSubmit} >Actualizar</Button>
        </Form>
        </Card.Body>
        </Card>
    </div>
    )

}

export default CompEditEvento