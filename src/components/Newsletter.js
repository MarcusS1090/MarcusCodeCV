import { Col, Row, Alert } from "react-bootstrap"
import { useState, useEffect } from "react";

//este componente nos sirve para pasar informacion a una pagina llamada MailchimpForm para que las personas puedan saber que hemos subido cosas nuevas cuando se subscriban.


export const Newsletter = ({ onValidated,status, message }) => {
    const [email, setEmail] = useState('');
   
    useEffect(() => {
        if (status === 'success') clearFields();
      }, [status])
    
      const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
          EMAIL: email
        })
      }

      const clearFields = () => {
        setEmail('');
      }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>¡Subscribete a nuestro boletin informativo!</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                     </Col>
                </Row>
            </div>
        </Col>
    )
}