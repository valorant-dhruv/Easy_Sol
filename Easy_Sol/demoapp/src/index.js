// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import App from "./App";
// import NavbarComp from "./components/NavbarComp";
// import Home from "./components/Home";
// import NewComplaints from "./components/NewComplaints";
// import ExistingComplaints from "./components/ExistingComplaints";
// import Admin from "./components/Admin";
// import User from "./components/User";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <NavbarComp />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/NewComplaints" component={NewComplaints} />
//         <Route path="/ExistingComplaints" component={ExistingComplaints} />
//         <Route path="/Admin" component={Admin} />
//         <Route path="/User" component={User} />
//       </Switch>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import NewComplaints from "./components/NewComplaints";
import ExistingComplaints from "./components/ExistingComplaints";
import Admin from "./components/Admin";
import User from "./components/User";
import UserRegistration from "./components/UserRegistration";
import Faq from "./components/Faq";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AdminNavbar from "./components/adminnavbar";
import complainttable from "./components/PendingComplaints";
// import underreview from "./components/UnderReviewComplaints";
const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/NewComplaints" component={NewComplaints} />
        <QueryClientProvider client={client}>
          <Route path="/ExistingComplaints" component={ExistingComplaints} />
          <Route path="/Admin" component={Admin} />
          <Route path="/User" component={User} />
          <Route path="/UserRegistration" component={UserRegistration} />
          <Route path="/Faq" component={Faq} />
          <Route path="/Adminnavbar" component={AdminNavbar} />
          <Route path="/complainttable" component={complainttable} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
