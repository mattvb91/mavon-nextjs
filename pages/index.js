import { faCode, faComment, faCodeBranch, faStar, faBookOpen, faBookDead } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetch from "isomorphic-unfetch";
import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import TimeAgo from 'react-timeago';
import styled from 'styled-components';

const GithubActivityTile = styled(Row)`
  margin-top: 10px;
  border-bottom: 1px solid lightgray;
`

const Ago = styled(TimeAgo)`
  font-size: 12px;
  font-style: italic;
  color: grey;
`

function Home(props) {

  console.log(props);

  function parseGithubEvent(event) {
    switch (event.type) {
      case 'PushEvent':
        return { description: 'pushed to', icon: faCode }
        break;
      case 'IssueCommentEvent':
        return { description: 'commented on', icon: faComment };
      case 'PullRequestEvent':
        return {
          description: event.payload.action + ' pull request on',
          icon: event.payload.action === 'opened' ? faBookOpen : faBookDead
        }
      case 'CreateEvent':
        return {
          description: 'created ' + event.payload.ref_type + ' ' + '"' + (event.payload.ref ? event.payload.ref : event.repo.name) + '"',
          icon: faCodeBranch
        }
      case 'WatchEvent':
        return {
          description: 'starred',
          icon: faStar
        }
      default:
        return { description: event.type };
    }
  }

  return (
    <>
      <Row style={{ height: '100%' }} center="xs" middle="xs">
        My latest github Activity
    </Row>
      {props.github.splice(0, 10).map((item) => {
        let event = parseGithubEvent(item);
        return (
          <GithubActivityTile key={item.id} middle="xs">
            <Col xs={1}>
              {event.icon ? <FontAwesomeIcon icon={event.icon} /> : null}
            </Col>
            <Col xs={11}>
              <Row>
                {event.description}<a target="_blank" href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a>
              </Row>
              <Row>
                <Ago date={item.created_at} />
              </Row>
            </Col>
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

