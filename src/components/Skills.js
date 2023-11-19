import { Container, Col, Row} from "react-bootstrap";
import  Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/95.svg";
import meter2 from "../assets/img/90.svg";
import meter3 from "../assets/img/85.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const MySkills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            item: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>I have a diverse set of skills in the field of programming, particularly in web-based programming, data management, and application design. Some of the tools I frequently use include Bootstrap, React, .NET, C++, Python, Java, PHP, SQL, and many more.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Database Management</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>UI/UX Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp}/> */}
        </section>
    )
}