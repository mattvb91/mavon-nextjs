import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import SocialLinks from './SocialLinks';

const FooterElement = styled(Row)`
    height: 100px;
    background-color: #fafafa;
    border-top: 1px solid lightgray;
    position: absolute;
    bottom: 0;
    width: 100%;
    align-content: center;
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
                <SocialLinks/>
            </Col>
        </FooterElement>
    )
}

export default Footer;