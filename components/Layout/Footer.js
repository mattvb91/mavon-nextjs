import styled from 'styled-components';
import { Row } from 'react-styled-flexboxgrid';

const FooterElement = styled(Row)`
    height: 100;
`

function Footer(props) {
    return (
        <FooterElement>
            Developed with Next.js 
        </FooterElement>
    )
}

export default Footer;