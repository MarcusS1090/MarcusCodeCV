//importacion de las dependencias,utilidades,assets, etc.
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    const form = useRef();
    //aqui vamos a crear una funcion para el envio del formulario a nuestro servidor, hacemos un fect request para ello
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_b0oiuyo',
       'template_s447le4',
        form.current,
        'OBSChM4lhZY7hgddQ')
        .then((result) => {
            console.log(result.text);
            console.log("Success");
        }, (error) => {
            console.log(error.text);
            console.log("fail");
        });
    };

    return (
        <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img  src={contactImg} alt="Contact Us"/>
            </Col>
            <Col size={12} md={6}>
              <h2>!Contactame y trabajemos juntos¡</h2>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text"  placeholder="Nombre" name="user_name" />
                  </Col> 
                  <Col size={12} sm={6} className="px-1">
                    <input type="name" placeholder="Apellido" name="user_lastName"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" placeholder="name@example.com" name="user_email" />   
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="number" placeholder="numero de telefono" name="user_phone"/>
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" placeholder="Asunto"></textarea>
                    <button type="submit" value="send"><span>Enviar</span></button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    )
}