import { Container, Row,Col } from "react-bootstrap";
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png'
import navIcon3 from '../assets/img/nav-icon3.svg';

//aqui vamos a crear nuestro footer el cual vamos a darle ciertas propiedades


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/itsmarcus1090/"><img src={navIcon1} alt="linkedin"/></a>
                            <a href="https://github.com/MarcusS1090"><img src={navIcon2} alt="gitHub"/></a>
                            <a href="https://instagram.com/marcusenju?igshid=ZDdkNTZiNTM="><img src={navIcon3} alt="instagram"/></a>
                        </div>
                        <p>CopyRight 2023,All Right Reserved By MarcusCode</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}