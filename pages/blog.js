import fetch from "isomorphic-unfetch";
import Link from "next/link"
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import TimeAgo from 'react-timeago'

const TileRow = styled(Row)`

    h2 {
        font-weight: bold;
    }

    min-height: 100px;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
`;

const CenterCol = styled(Col)`
  font-size: 20px;
  color: #B0BEC5;
  font-weight: 10;
`;

const Description = styled.p`
    padding-top: 20px;
    padding-bottom: 20px;
`

function Blog(props) {
    return (
        <>
            {props.articles.length ? props.articles.map((article) => {
                return (
                    <TileRow key={article.id}>
                        <Col xs={12}>
                            <Row>
                                <h2>
                                    <Link href={`/blog/${article.id}/${article.slug}`}>
                                        <a>{article.title}</a>
                                    </Link>
                                </h2>
                            </Row>
                            <Row>
                                <TimeAgo date={article.published_timestamp} />
                            </Row>
                            <Row>
                                <Description>
                                    {article.description}
                                </Description>
                            </Row>
                            <Row>
                                Tags: {article.tag_list.map((tag) => {
                                    return (
                                        <div key={tag}>{tag}</div>
                                    )
                                })}
                            </Row>
                        </Col>
                    </TileRow>
                )
            }) :
                <Row style={{ height: '100%' }} center="xs" middle="xs">
                    <CenterCol>
                        Nothing here yet
                    </CenterCol>
                </Row>
            }
        </>
    )
}

Blog.getInitialProps = async function (ctx) {
    const data = await (fetch('https://dev.to/api/articles?username=mattvb91'))
    const json = await data.json();

    return {
        articles: json
    };
}

export default Blog;