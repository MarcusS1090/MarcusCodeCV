/*
aqui vamos a poner la utilidad  y todo lo relacionado al funcionamiento de el banner.

aqui importamos nuestras etiquetas de react-bootstrap, nuestras funcionalidades, etc
*/
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/header-img.svg';


//vamos a importar nuestros paquetes para que haya animaciones

//vamos a importar nuestra dependecia de react-on-screen
/*  
aqui procederemos a exportar todo lo que conlleva al banner a nuestro archivo App.js en src, esto lo hacemos con una funcion 
para hacer mas rapido las callbacks
*/
export const Banner = () =>{ 
    /*
        aqui pondremos nuestro codigo para hacer las animaciones del banner
    */
    //aqui con esto vamos a indexar cual palabra esta en el momento y que se repita en Loop
    const [loopNum, setLoopNum] = useState(0);
    // en esta constante tendremos la funcion para ver si la palabra ya ha sido borrada o esta lista para ser borrada
    const [isDeleting, setIsDeleting] = useState(false);
    //en esta constante enlistamos todas las palabras que mostraremos en la animacion del banner
    const toRotate = ["Web Developer", "Web Designer", "3D Designer"];
    //esta constante es para mostrar el texto que tenemos actualmente
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    //con esta constante vamos a tener otro estado, para determinar que tan rapido va la animacion de uno,detras de otro
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    //y en esta constante vamos a darle el tiempo o periodo de nuestra animacion
    const period = 2000;

    //vamos a hacer uso de useEffect como funcion para darle todo el funcionamiento a nuestra animacion
    useEffect(() => {
        //con la constante ticker vamos a 
        const ticker = setInterval(() => {
            tick();
        }, [delta])

        return () => { clearInterval(ticker) };
    })

    //aqui vamos a hacer una funcion para que nos tome el tiempo de nuestro index para que cambie cada cierto tiempo
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) :
                                       fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
          } else {
            setIndex(prevIndex => prevIndex + 1);
          }

        }

    return (
        /*
        en este section vamos a poner lo que va dentro de nuestra pagina de inicio que tiene un id de nombre home
        aqui tenemos una etiqueta tipo container tendremos nuestro banner y funcionalidades
        */
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md = {6} xl = {7}>
                        <span className="tagline">Bienvenidos a mi portafolio</span>
                        <h1>{`Hola soy MarcusCode Web Developer`}</h1>
                        <p>Soy una persona joven con un sistema de valores laborales fundamentado en la responsabilidad, esfuerzo, resiliencia,
                            tengo claro mis propósitos y metas a mediano y corto plazo,
                            conozco mi potencial y la capacidad de mis aptitudes para prestar mis servicios de manera óptima en el área y cargo a desempeñar
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt = "Header Img"/>                     
                    </Col>
                </Row>
            </Container>
        </section>
    )
}