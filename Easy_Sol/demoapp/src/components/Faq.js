import { Accordion } from "react-bootstrap";
import "../App (1).css";

import React, { Component } from "react";

export default class Faq extends Component {
  render() {
    return (
      <div className="faq_accordion">
        <h2 align="center">
          F.A.Q.S
          <hr />
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="faq_accordion_heading">What is EasySol?</div>
            </Accordion.Header>
            <Accordion.Body>
              Easysol is a website which helps you register complaints
              pertaining to issues such as garbage accumulation, potholes,
              electricity and other such municipal issues in a quick and easy
              way.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="faq_accordion_heading">
                How do you register a complaint?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              You go to the new complaints tab after you login using your
              credentials and click on the location you want to register your
              complaint.
              <br />A pop up appears, click the submit your complaint button and
              register your complaint in the form that appears.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="faq_accordion_heading">
                How do you check the status of your complaint?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Once you register your complaint you can see it appear in the
              existing complaints tabs until it has been resolved.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="faq_accordion_heading">
                {" "}
                What happens when you register a complaint on the admin side?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Once you register a complaint, the admin will receive the
              complaint and then will forward it to the concerned department for
              them to take action.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}
