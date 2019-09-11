import Link from "next/link";
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const HeaderPane = styled(Grid)`
    height: 55px;
    background-color: white;
    box-shadow: 0px 0px 8px lightgray;
`

const HeaderLink = styled.a`
    height: 100%;
`

function Header(props) {
    return (
        <Headroom>
            <HeaderPane>
                <Row style={{ height: '100%', alignContent: 'center' }}>
                    <Col>
                        <Link href='/'>
                            <HeaderLink>Home</HeaderLink>
                        </Link>
                    </Col>
                    <Col>
                        <Link href='/blog'>
                            <HeaderLink>Blog</HeaderLink>
                        </Link>
                    </Col>
                </Row>
            </HeaderPane>
        </Headroom>
    );
}

export default Header;