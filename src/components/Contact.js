//importacion de las dependencias,utilidades,assets, etc.
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

    //vamos a crear un objeto para nuestro formulario de contacto
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    //vamos a crear nuestras funciones para el estado de si el formulario se lleno o no 
    const [formDetails, setFormDetails] = useState(formInitialDetails);

    //vamos a crear una variable para nuestro boton, para saber cuando se hizo efectivo el envio de nuestro formulario
    const [buttonText, setButtonText] = useState('Enviar');

    //aqui vamos a crear una variable para ver que nuestra api este en buen funcionanmiento o que nos envie un error

    const [status, setStatus] = useState({});

    //aqui vamos ver que solo nos de los valores que le hemos pedido 
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }

    //aqui vamos a crear una funcion para el envio del formulario a nuestro servidor, hacemos un fect request para ello
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Enviando...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-type": "Application/json;chraset=utf-8",
            },
            body: JSON.stringify(formDetails),
             
        });
        setButtonText("Enviado");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success: true, message: 'Mensaje enviado satisfactoriamente'});
        } else {
            setStatus({success: false, message: 'Algo fallo,por favor intente de nuevo mas tarde'})
        }
    };

    return (
        <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lasttName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Correo Electronico" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Numero de Telefono" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
}