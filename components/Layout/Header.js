import Link from "next/link";
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { withRouter } from 'next/router'

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

const ActiveRow = styled(Row)`
    background-color: grey;
    height: ${props => {
        if (props.active) {
            return '1px'
        }
        return '0px'
    }};
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0px;
    box-shadow: 0px -1px 5px grey;
`

function Header(props) {

    return (
        <Headroom>
            <HeaderFrame>
                <HeaderPane>
                    <Row style={{ height: '100%', alignContent: 'center' }}>
                        <Col style={{ height: '100%', position: 'relative' }}>
                            <Row middle="xs" style={{ height: '100%' }}>
                                <Col>
                                    <Link href='/'>
                                        <HeaderLink>
                                            <b>Mavon.ie</b>
                                        </HeaderLink>
                                    </Link>
                                </Col>
                            </Row>
                            <ActiveRow active={props.router.pathname === '/'} />
                        </Col>
                        <Col>
                            <Row middle="xs" style={{ height: '100%' }}>
                                <Col>
                                    <Link href='/blog'>
                                        <HeaderLink>Blog</HeaderLink>
                                    </Link>
                                </Col>
                            </Row>
                            <ActiveRow active={props.router.pathname === '/blog'} />
                        </Col>
                        <Col>
                            <Row middle="xs" style={{ height: '100%' }}>
                                <Col>
                                    <Link href='/resume'>
                                        <HeaderLink>Resume</HeaderLink>
                                    </Link>
                                </Col>
                            </Row>
                            <ActiveRow active={props.router.pathname === '/resume'} />
                        </Col>
                    </Row>
                </HeaderPane>
            </HeaderFrame>
        </Headroom>
    );
}

export default withRouter(Header);