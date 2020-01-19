import React, { useState, Fragment } from "react";

import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';

class SplashPage extends React.Component {
  render() {
    if (this.props.currStep != 1) return null;
    return (
      <div class="main">
        <Badge variant="dark">
          Made for full screen desktop views
        </Badge>
        <br />
        <Badge pill variant="primary">
          36-Hour Hackathon
        </Badge>
        <h1>
          <b>
            Time Block <br />
            Your Life
          </b>
          <br />
          <br />
        </h1>

        <div class="intro">
          <Fade up>
            <h2>{this.props.title}</h2>
          </Fade>

          <Fade up cascade>
            <div id="opening-text">
              <p>
                Why put tasks in a to-do list and forget to do them, when you
                can schedule them automatically in your calendar?
              </p>
              <p>
                With Time Blocker, your calendar will automatically block off
                time in advance for you to study and work on your school
                assignments and exams.
              </p>
            </div>
          </Fade>

          <Fade up>
            <Button variant="outline-primary" onClick={this.props.next}>
              Get Started!
            </Button>
          </Fade>

          <Fade right>
            <img src={"./images/" + this.props.image} id="header-image" />
          </Fade>
        </div>
      </div>
    );
  }
}

export default SplashPage;
