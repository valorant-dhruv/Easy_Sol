import React, { Component, useState } from "react";
import { Alert, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import App from "../App";
import { useHistory } from "react-router-dom";
import User from ".././backend/models/usermodel";

function UserRegistration() {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [address1, setaddress1] = useState("");
  let [address2, setaddress2] = useState("");
  let [city, setcity] = useState("");
  let [postalcode, setpostalcode] = useState();

  let history = useHistory();

  let redirect = () => {
    setTimeout(() => {
      redirecting();
    }, 3000);
  };

  let redirecting = async function () {
    let userdata;

    await fetch("http://localhost:5000/api/user/signuped", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        userdata = data;
        console.log(userdata);
      })
      .catch((e) => {
        console.log(e);
      });

    if (userdata.invalid) {
      alert("The email is already registered....please login");
    } else {
      history.push("/ExistingComplaints");
    }

    console.log(userdata);
  };

  let userdatasubmit = function (event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        address1,
        address2,
        city,
        postalcode,
      }),
    });
    redirect();
  };
  return (
    <div className="about_body">
      <Form method="POST" onSubmit={userdatasubmit}>
        <Alert>
          <Alert.Heading>
            <h3 align="center">User Registration Form</h3>
            <hr />
          </Alert.Heading>
        </Alert>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail"
              required="true"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required="true"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="House Number,Society"
            required="true"
            value={address1}
            onChange={(e) => {
              setaddress1(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Street Name,Area"
            required="true"
            value={address2}
            onChange={(e) => {
              setaddress2(e.target.value);
            }}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose">
              <option>Choose</option>
              <option>Gujarat</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postalcode}
              onChange={(e) => {
                setpostalcode(e.target.value);
              }}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" className="AdminSubmitButton">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserRegistration;
