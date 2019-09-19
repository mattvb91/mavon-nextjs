import Link from "next/link";
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const HeaderFrame = styled.div`
    height: 55px;
    background-color: white;
    box-shadow: 0px 0px 8px lightgray;
`

const HeaderPane = styled(Grid)`
    height: 55px;
`

const HeaderLink = styled.a`
`

function Header(props) {
    return (
        <Headroom>
            <HeaderFrame>
                <HeaderPane>
                    <Row style={{ height: '100%', alignContent: 'center'}}>
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
            </HeaderFrame>
        </Headroom>
    );
}

export default Header;