import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//const URI = 'http://localhost:8000/usuarios/shuser/'
const URI = 'https://app-g51gh.herokuapp.com/usuarios/shuser/'
//const URI2 = 'http://localhost:8000/usuarios/upuser/'
const URI2 = 'https://app-g51gh.herokuapp.com/usuarios/shuser/'
export const CompEditUser = () => {
    const [nomuser, setUsuario] = useState('')    
    const [correo, setCorreo] = useState('')   
    const [password, setPassword] = useState('')   
    const navigate = useNavigate()
    const {id} = useParams()
    console.log('el valor del id es : ', id)
    //procedimiento para actualizar
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(URI2+id, {
            nomuser: nomuser,
            correo: correo,
            password: password
        })
        navigate('/users')
    }

  

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setUsuario(res.data.nomuser)
        setCorreo(res.data.correo)
        setPassword(res.data.password)
    }

    useEffect( ()=>{
        getBlogById()
     },[ ] )
    return (
        <div>
        <h3>Editar Usuario</h3>
        <form>
    
            <div>
                <label >Nombre</label>
                <input
                    value={nomuser}
                    onChange={ (e)=> setUsuario(e.target.value)}
                    type="text"
                                         
                />
            </div>
            <div>
                <label>Correo</label>
                <input
                    value={correo}
                    onChange={ (e)=> setCorreo(e.target.value)} 
                    type="text"
                   
                />
            </div>
       
            <div>
                <label >Password</label>
                <input
                    value={password}
                    onChange={ (e)=> setPassword(e.target.value)}
                    type="text"
                                       
                />
            </div>            
            <button type="submit" onClick={onSubmit} >Actualizar</button>
        </form>
    </div>
    )

}

export default CompEditUser