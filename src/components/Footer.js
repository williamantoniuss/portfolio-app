import { Container, Row, Col } from "react-bootstrap";
import { MyMailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-will.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/yt.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MyMailchimpForm/>
                    <Col sm={6}>
                        <img src={logo}/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/william-antonius-926687216/" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://youtube.com/@williamantonius1397?si=LK4aMvK2SXMxY78q" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/wil.liamantonius/" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>©2023 William Antonius</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}