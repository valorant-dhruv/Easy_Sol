import React, { Component, useState } from "react";
import { Alert, Form, FormControl, Button } from "react-bootstrap";

//The useHistory hook is used in redirecting the react app from one component to another
import { useHistory } from "react-router-dom";

function User() {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let history = useHistory();

  let redirect = () => {
    setTimeout(() => {
      redirecting();
    }, 3000);
  };

  let redirecting = async function () {
    let userdata;
    await fetch("http://localhost:5000/api/user/login", {
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
      })
      .catch((e) => {
        console.log(e);
      });

    if (userdata.invalidlogin) {
      alert("Invalid Id or password");
    } else {
      history.push("/ExistingComplaints");
    }

    console.log(userdata);
  };

  let userlogin = function (event) {
    event.preventDefault();

    fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    redirect();
  };

  return (
    <div className="userLoginBody">
      <div className="card">
        {" "}
        <Alert variant="">
          <Alert.Heading>
            <p>
              <h4 align="center"> User Login</h4>
            </p>
          </Alert.Heading>
          <hr />
          <Form method="POST" onSubmit={userlogin}>
            <Form.Group controlId="formGridEmail">
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

            <Form.Group controlId="formGridPassword">
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
            <hr />
            <Button varaint="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Alert>
      </div>
    </div>
  );
}

export default User;
