import { faCode, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetch from "isomorphic-unfetch";
import React from 'react';
import { Row } from 'react-styled-flexboxgrid';
import TimeAgo from 'react-timeago';
import styled from 'styled-components';

const GithubActivityTile = styled(Row)`
  margin-top: 10px;
  border-bottom: 1px solid lightgray;
`

function Home(props) {

  console.log(props);

  function parseGithubEvent(event) {
    switch (event) {
      case 'PushEvent':
        return { description: 'pushed to', icon: faCode }
        break;
      case 'IssueCommentEvent':
        return { description: 'commented on', icon: faComment };
      case 'PullRequestEvent':
        return {
          description: 'sds'
        }
      default:
        return { description: event };
    }
  }

  return (
    <>
      <Row style={{ height: '100%' }} center="xs" middle="xs">
        My latest github Activity
    </Row>
      {props.github.slice(0, 6).map((item) => {
        let event = parseGithubEvent(item);
        return (
          <GithubActivityTile key={item.id}>
            {event.icon ? <FontAwesomeIcon icon={event.icon} /> : null}
            {event.description}<a href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a> <TimeAgo date={item.created_at} />
          </GithubActivityTile>
        )
      })}
    </>
  );
}

Home.getInitialProps = async function (ctx) {
  const data = await (fetch('https://api.github.com/users/mattvb91/events'))
  let json = null;

  //Implement authorized header at later stage
  if (data.status == 200) {
    json = await data.json();
  } else {
    json = []
  }

  return {
    github: json
  };
}

export default Home

