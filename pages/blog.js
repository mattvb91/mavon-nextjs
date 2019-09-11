import fetch from "isomorphic-unfetch";
import Link from "next/link"
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import TimeAgo from 'react-timeago'

const TileRow = styled(Row)`
    min-height: 100px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 1px 1px 5px 1px lightgray;
`;

function Blog(props) {
    return (
        <>
            <h1>Blog</h1>
            {props.articles.length ? props.articles.map((article) => {
                return (
                    <TileRow key={article.id}>
                        <Col>
                            <Row>
                                <h2>
                                    <Link href={`/blog/${article.slug}`}>
                                        <a>{article.title}</a>
                                    </Link>
                                </h2>
                            </Row>
                            <Row>
                                <TimeAgo date={article.published_timestamp} />
                            </Row>
                            <Row>
                                <p>
                                    {article.description}
                                </p>
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
            }) : <p>Nothing here yet</p>
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