import { faBookDead, faBookOpen, faCode, faCodeBranch, faComment, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetch from "isomorphic-unfetch";
import absoluteUrl from 'next-absolute-url';
import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import TimeAgo from 'react-timeago';
import styled from 'styled-components';
import LazyHero from 'react-lazy-hero';
import SocialLinks from '../components/Layout/SocialLinks';

const GithubActivityTile = styled(Row)`
  margin-top: 10px;
  border-bottom: 1px solid lightgray;
  
  a {
    color: #0366d6;
  }

  a:visited {
    color: #0366d6;
  }

  p {
    padding-right: 5px;
  }

`
const Ago = styled(TimeAgo)`
  font-size: 12px;
  font-style: italic;
  color: grey;
`

const HeroText = styled.p`
  color: #FFF;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  a {
    color: lightblue;
  }
`

function Home(props) {

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
      <LazyHero minHeight="250px" imageSrc="/static/img1.jpg" parallaxOffset={50} opacity={0.2}>
        <HeroText>
          Hi, my name is Matthias. I'm a Freelance PHP Consultant, B.A.S.E jumper & Thru Hiker.
        </HeroText>
        <HeroText>
          I love building interesting web projects. If you think I should be working on your 
          latest vision why not <a href="mailto:matt@mavon.ie">throw me a mail?</a>
        </HeroText>
        <SocialLinks theme="white" />
      </LazyHero>

      <Row style={{ height: '100%', marginTop: '20px' }} center="xs" middle="xs">
        <b>My latest Github activity</b>
      </Row>

      {props.github.map((item) => {
        let event = parseGithubEvent(item);
        return (
          <GithubActivityTile key={item.id} middle="xs">
            <Col xs={2} style={{ textAlign: 'center' }}>
              {event.icon ? <FontAwesomeIcon icon={event.icon} /> : null}
            </Col>

            <Col xs={10}>
              <Row>
                <p>{event.description}</p>
                <a target="_blank" href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a>
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

Home.getInitialProps = async function ({ req }) {

  const { protocol, host } = absoluteUrl(req)
  const data = await (fetch(`${protocol}//${host}/api/github`))
  let json = null;

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

