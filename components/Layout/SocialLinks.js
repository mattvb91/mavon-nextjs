import { Col, Row } from 'react-styled-flexboxgrid';
import { faGithubSquare, faYoutubeSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const Icon = styled(FontAwesomeIcon)`
    padding: 5px;
    font-size: 30px;
    
    :hover {
        color: black;
    }
`

const SocialCol = styled(Col)`
    a {
        color: ${props => {
        if (props.theme) {
            return props.theme;
        }
        return 'gray'
    }};
    }
`

function SocialLinks(props) {
    return (
        <Row xs={12} center="xs">
            <SocialCol theme={props.theme}>
                <a href="https://github.com/mattvb91" target="_blank">
                    <Icon icon={faGithubSquare} />
                </a>
                <a href="https://www.linkedin.com/in/matthiasvonbargen/" target="_blank">
                    <Icon icon={faLinkedin} />
                </a>
                <a href="https://www.youtube.com/user/MattvB91/" target="_blank">
                    <Icon icon={faYoutubeSquare} />
                </a>
            </SocialCol>
        </Row>
    )
}

export default SocialLinks;