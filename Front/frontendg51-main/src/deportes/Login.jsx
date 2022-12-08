import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import Card from 'react-bootstrap/Card';

//aca inicia
export const Login = () => {

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

    const [body, setBody] = useState({ correo: '', password: '' })
    const navigate  = useNavigate()
   // const classes = useStyles()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }


    
 //************* */
 const mostraralerta = () => {
  Swal.fire ("Mensaje Simple")
 }
    //********** */
       const onSubmit = async (e) => {
        e.preventDefault();
        try{

            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    
                    "Access-Control-Allow-Origin": "*",
                }
              };
            //const URI = 'http://localhost:8000/usuarios/login'
            const URI = 'https://app-g51gh.herokuapp.com/usuarios/login'
            
        console.log("paso por aca")
        console.log (axiosConfig);
        const resp = await axios.post(URI, body, axiosConfig );
    let s = JSON.stringify(resp?.data);
    console.log ("este es mi Token arr ",s);

       let union1 = s.split(":")[2];
    
       let r = union1.substring(1, union1.length-3);
            console.log('Este es el JWT:',r);
           localStorage.setItem('auth',r)
            navigate('/shevento')
              window.location = '/shevento'
           
               
            
        }
        catch(error)  {
                navigate('/login')
               window.location = '/login'
                console.log(error)
                console.log("Paso por abajo")
            }
        }
 
//************* */

    return (
     
            
                <div className="login-form">
                   
                   <div className="login-form">
                   <Card style={{ width: '40rem' }}>
                    <Card.Body>
                    <h3 className="login-form" >Usuarios Registrados</h3>
                    <Form >
                    <Form.Label>Ingrese su correo</Form.Label>
                        <div className="login-form">
                        <Form.Control 
                          
                            autoFocus
                            type= "text"
                            placeholder = "Correo"
                            value= {body.correo}
                            onChange= { inputChange }
                            name= "correo"
                        />
                        </div>
                        <Form.Label>Ingrese su password</Form.Label>
                        <div className="login-form">
                        <Form.Control  type="password"
                            placeholder = "Password"
                            value={body.password}
                            onChange={inputChange}
                            name="password"
                        />
                        </div>
                        <Button variant="primary" className="btn-register" onClick={onSubmit} type="submit" >
                            Sign In
                        </Button>
                        <Button variant="danger">
                        <Link to="/create" className='btn-register'>Sign Up</Link> </Button>
                    </Form>
                    </Card.Body>
                  </Card>
                    </div> 
                  
                </div>
          
      
    )
}

export default Login;