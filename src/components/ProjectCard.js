import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                            {description}
                        </a>
                    </span>
                </div>
            </div>
        </Col>
    )
}