import Link from "next/link";
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const HeaderPane = styled(Grid)`
    height: 45px;
    background-color: white;
    box-shadow: 0px 0px 8px lightgray;
`

function Header(props) {
    return (
        <Headroom>
            <HeaderPane>
                <Row>
                    <Col>
                        <Link href='/'><a>Home</a></Link>
                    </Col>
                    <Col>
                        <Link href='/blog'><a>Blog</a></Link>
                    </Col>
                </Row>
            </HeaderPane>
        </Headroom>
    );
}

export default Header;