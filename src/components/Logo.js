import { Form, Button } from 'react-bootstrap'

const Logo = () => {
  return( 
  <div className = 'login-container'>
    <div>
      <img src='https://i.ibb.co/VpR2QsY/logo-korean.png' className='logo' alt = ''></img>
    </div>
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Usuario" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default Logo;