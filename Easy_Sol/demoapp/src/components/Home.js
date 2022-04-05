import React, { Component } from "react";
import App from "../App";
import { Alert, Button } from "react-bootstrap";
import User from "./User";

export default class Home extends Component {
  render() {
    return (
      <>
        <body>
          <div className="about_body ">
            <div>
              <Alert variant="">
                <Alert.Heading>
                  <p align="center">
                    <h2>EasySol</h2>
                  </p>
                </Alert.Heading>
                <p>
                  <h4>
                    Easysol is a web based application which can be used to
                    register complaints and track existing complaints. Once the
                    user signs in they will be redirected to their homepage from
                    where they can register their complaints. User can add
                    complaints pertaining to potholes, electric pole defaults,
                    power outages, deceased animal reports,etc.
                    <br />{" "}
                  </h4>
                </p>
                <hr />

                <p className="mb-0" align="center">
                  Register your complaints right now by signing in or creating a
                  new account!
                  <br />
                  <br />
                </p>
                <p align="center">
                  {" "}
                  <Button align="center" href="./UserRegistration">
                    Register Now!
                  </Button>
                </p>
              </Alert>
            </div>
          </div>
        </body>
      </>
    );
  }
}
