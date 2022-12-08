import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
//import styles from "./styles.module.css";

//const URI = 'http://localhost:8000/usuarios/shuser/'
const URI = 'https://app-g51gh.herokuapp.com/usuarios/shuser/'
//const URI2 = 'http://localhost:8000/usuarios/deluser/'
const URI2 = 'https://app-g51gh.herokuapp.com/usuarios/deluser/'
export const CompShowUsers = () => {

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
    
    const [users, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los registros
    const getBlogs = async () => {
        const res = await axios.get(URI, axiosConfig )
        setBlog(res.data)
    }

    //procedimineto para eliminar un registro
    const deleteBlog = async (id) => {
       await axios.delete(`${URI2}${id}`)
       getBlogs()
    }

    return(
        <div className="">
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i>crear</Link>
                    <table className='table'>
                        <thead className='thead tr:first-child'>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( (blog) => (
                                <tr key={ blog._id}>
                                    <td > { blog.nomuser } </td>
                                    <td > { blog.correo } </td>
                                    <td > { blog.password } </td>
                                    <td>
                                        <Link to={`/edit/${blog._id}`} className=''><i className="fas fa-edit"></i>edit</Link>
                                        <button onClick={ () => deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowUsers