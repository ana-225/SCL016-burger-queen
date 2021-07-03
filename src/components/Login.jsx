import React, { useState } from 'react'
import { auth } from '../firebaseconfig'
import { Form, Button } from 'react-bootstrap'
import logo from '../img/logo.png'
import { useHistory}  from 'react-router-dom'


const Login = () => {
  const historial = useHistory('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [msgerror, setMsgError] = useState(null)
  
  //console.log(email, pass);


 
//  const RegistrarUsuario = (e) => {
//     e.preventDefault()
//         auth.createUserWithEmailAndPassword(email, pass)
//         .then(r =>{
//           historial.push('/')
//         })
//         .catch(e=> {
//         console.log(e)
//     })
//   }

  const LoginUsuario = ()  => {
    auth.signInWithEmailAndPassword(email, pass)
    .then( (r) =>{
      historial.push('/lunch')
    } )
    .catch( (err) => {
      if(err.code === "auth/wrong-password"){
        setMsgError("password incorrecta")
      }
    })
  }
  return ( 
  <div className = 'login-container'>
    <div>
      <img src={logo} className='logo' alt = ''></img>
    </div>
    <div>
      <Form >
        <Form.Group  controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
          onChange = {(e) => {setEmail(e.target.value)}}
          type="email" placeholder="Usuario" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control 
          onChange = {(e) => {setPass(e.target.value)}}
          type="password" placeholder="Contraseña" />
        </Form.Group>
     </Form>  
      <Button 
          onClick = {LoginUsuario}
          variant="primary" type="submit">
          Ingresar
        </Button>
        {
          msgerror ?
          (<div>
            {msgerror}
            </div>
            )
            :
            (
            <span></span>
            )
        }
    </div>
  </div>
  )
}

export default Login;