import React, { useState } from 'react'
import { auth } from '../firebaseconfig'
import { Form, Button } from 'react-bootstrap'
import logo from '../img/logo.png'


const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  //console.log(email, pass);

  const RegistrarUsuario = (e) => {
    e.preventDefault()
    try {
        auth.createUserWithEmailAndPassword(email, pass)
        alert('Usuario registrado');
    } catch(e) {
        console.log(e)
    }
  }

  const LoginUsuario = ()  => {
    auth.signInWithEmailAndPassword(email, pass)
    .then( (r) => console.log(r) )
    .catch( (err) => {
      console.log(err)
    })
  }
  return ( 
  <div className = 'login-container'>
    <div>
      <img src={logo} className='logo' alt = ''></img>
    </div>
    <div>
      <Form>
        <Form.Group onSubmit={RegistrarUsuario} controlId="formBasicEmail">
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
        <Button 
          onClick = {LoginUsuario}
          variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default Login;