import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { faGithubSquare, faYoutubeSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterElement = styled(Row)`
    height: 100px;
    background-color: #fafafa;
    border-top: 1px solid lightgray;
    position: absolute;
    bottom: 0;
    width: 100%;
    align-content: center;
`
const Icon = styled(FontAwesomeIcon)`
    padding: 5px;
    font-size: 30px;
    color: grey;

    :hover {
        color: black;
    }
`

function Footer(props) {
    return (
        <FooterElement center="xs">
            <Col>
                <Row xs={12}>
                    <Col style={{ fontSize: '13px' }} middle="xs">
                        Developed with React & Next.js
                    </Col>
                </Row>
                <Row xs={12} center="xs">
                    <Col>
                        <Icon icon={faGithubSquare} />
                        <Icon icon={faLinkedin} />
                        <Icon icon={faYoutubeSquare} />
                    </Col>
                </Row>
            </Col>
        </FooterElement>
    )
}

export default Footer;