// import React, { Component, useState } from "react";
// import { Form, Button, FloatingLabel, FormControl } from "react-bootstrap";
// import { App } from "../App";

// function Admin() {
//   let [email, setEmail] = useState(" ");
//   let [password, setPassword] = useState(" ");

//   async function userData(event) {
//     event.preventDefault();
//     const response = await fetch("http://localhost:1337/api/userdata", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });

//     const data = response.json();
//     console.log(data);
//   }
//   return (
//     <div>
//       <form onSubmit={userData}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           placeholder="name@example.com"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//           placeholder="Password"
//         />
//         <input type="submit" value="submit"></input>
//       </form>
//     </div>
//   );
// }
// // export default class Admin extends Component {
// //   render() {
// //     // eslint-disable-next-line react-hooks/rules-of-hooks

// //     // eslint-disable-next-line react-hooks/rules-of-hooks

// //     return (

// //     );
// //   }
// export default Admin;

import React, { Component, useState } from "react";
import { Button, FormControl, Alert } from "react-bootstrap";
import { App } from "../App";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

function Admin() {
  let history = useHistory();
  let [email, setEmail] = useState(" ");
  let [password, setPassword] = useState("");

  let redirect = () => {
    setTimeout(() => {
      redirecting();
    }, 3000);
  };

  const redirecting = async function () {
    let body;

    await fetch("http://localhost:5000/api/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        body = data;
        console.log(body);
      })
      .catch((e) => {
        console.log(e);
      });

    if (body.invalid) {
      alert("Invalid email or password");
    } else {
      history.push("/Adminnavbar");
    }
  };

  async function adminData(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = response.json();
    console.log(data);

    redirect();
  }
  return (
    <div className="admin_body ">
      <Alert variant="dark info">
        <Alert.Heading>
          <h3 align="center">Admin Login</h3>
        </Alert.Heading>
        <hr />

        <form onSubmit={adminData}>
          <FormControl
            className="AdminCard"
            size="sm"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <FormControl
            className="AdminCard"
            size="sm"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <Button
            variant="primary"
            type="submit"
            value="submit"
            align="center"
            onclick={() => {}}
          >
            Submit
          </Button>
        </form>
      </Alert>
    </div>
  );
}
// export default class Admin extends Component {
//   render() {
//     // eslint-disable-next-line react-hooks/rules-of-hooks

//     // eslint-disable-next-line react-hooks/rules-of-hooks

//     return (

//     );
//   }
export default Admin;
