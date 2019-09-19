import styled from 'styled-components';

const FooterElement = styled.div`
    height: 100px;
    background-color: #fafafa;
    border-top: 1px solid lightgray;
    position: absolute;
    bottom: 0;
    width: 100%;
`

function Footer(props) {
    return (
        <FooterElement>
            Developed with Next.js 
        </FooterElement>
    )
}

export default Footer;