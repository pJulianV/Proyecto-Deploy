//importamos las libreiras
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { FaTrashAlt,FaPencilAlt,FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

//importar nuestras rutas del backend
//importar los eventos deportivos
//const URI = 'http://localhost:8000/usuarios/shevento/'
const URI = 'https://app-g51gh.herokuapp.com/usuarios/shevento/'
//eliminar un evento deportivo
//const URI2 = 'http://localhost:8000/usuarios/delevento/'
const URI2 = 'https://app-g51gh.herokuapp.com/usuarios/delevento/'
//procedimientos para mostrar los eventos deportivos
export const CompMostrarEvento = () => {

    //Aca enviamos el Token como un Header

const token1 = localStorage.getItem("auth")
const token = `${token1}`;
const beer = "Bearer"
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'accept': 'application/json',
      //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njk0NjcxMzgsImV4cCI6MTY2OTQ2ODkzOH0.Dp0FfAN_taNOtPRhOGeAB7nQZvMvzVddPhN4TKb3JJo',
     'Authorization': `${beer} ${token}`,
    }
};
    
    const [ceventos, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los registros
    const getBlogs = async () => {
        const res = await axios.get(URI,axiosConfig)
        setBlog(res.data)
    }

    //procedimineto para eliminar un registro
    const deleteBlog = async (_id) => {
    Swal.fire({
        title: 'Advertencia',
        text: 'Esta ud seguro de eliminar este evento?',
        imageUrl:"https://www.pexels.com/es-es/foto/foto-del-rio-durante-el-dia-2030660/",
        imageHeight: 200, 
        imageWidth: 200, 
        icon: 'question',
        showDenyButton: true,
        denyButtonText: "NO",
        confirmButtonText: "SI",
        

    }).then(response => {
        if(response.isConfirmed){
             axios.delete(`${URI2}${_id}`)
             Swal.fire("El evento fue borrado con exito")
            getBlogs()
        } else {
            Swal.fire("seleccione el evento a borrar")
        }
    })
     
    }

    //aca enviamos un fragmento de codigo la informacion a nuestra pagina principal
    return(
        <div >
            <div >
                <div>
                    <Link to="/regevento" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"><FaRegEdit size = "30" color ="red"/></i></Link>
                    <Table striped bordered hover size="sm">
                        <thead >
                            <tr>
                                <th>Fecha</th>
                                <th>Equipo 1</th>
                                <th>Equipo 2</th>
                                <th>Marcador  E1</th>
                                <th>Marcador E2</th>
                                <th>Tipo Evento</th>
                            </tr>
                        </thead>
                        <tbody>
                            { ceventos.map ( (blog) => (
                                <tr key={ blog._id}>
                                    <td > { blog.fecha } </td>
                                    <td > { blog.equipo1 } </td>
                                    <td > { blog.equipo2 } </td>
                                    <td > { blog.marcador1 } </td>
                                    <td > { blog.marcador2} </td>
                                    <td > { blog.tipoevento } </td>
                                    <td>
                                        <Link to={`/editevento/${blog._id}`} className=''><i className="fas fa-edit"><FaPencilAlt/></i></Link>
                                       </td>
                                       <td>
                                        <button onClick={ () => deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"><FaTrashAlt /></i></button>
                                        
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </Table>
                </div>    
            </div>
        </div>
    )

}

//exportar nuestro componente
export default CompMostrarEvento