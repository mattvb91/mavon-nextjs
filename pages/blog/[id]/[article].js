import fetch from "isomorphic-unfetch";
import styled from 'styled-components';

const ArticleElement = styled.div`

    h1 {
        font-size: 25px;
        font-weight: bold;
        margin-left: 20px;
        margin-top: 20px;
        margin-right: 20px;
    }

    p {
        margin: 20px;
    }

    a {
        color: #3498db;
    }
`

function Article(props) {
    return (
        <ArticleElement>
            <h1>{props.article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.article.body_html }} />
        </ArticleElement>
    );
}

Article.getInitialProps = async function (ctx) {
    const data = await (fetch(`https://dev.to/api/articles/${ctx.query.id}`))
    const json = await data.json();

    return {
        article: json
    };
}


export default Article;