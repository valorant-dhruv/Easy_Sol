// import { Navbar, Nav } from "react-bootstrap";
// import { Component } from "react";
// import { LinkContainer } from "react-router-bootstrap";
// import { SiSlackware } from "react-icons/si";
// <SiSlackware size={30} style={{ fill: "black" }} />;

// export default class NavbarComp extends Component {
//   render() {
//     return (
//       <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
//         <div className="logo">
//           <SiSlackware size={30} style={{ fill: "white" }} />
//         </div>
//         <LinkContainer to="/">
//           <Navbar.Brand>
//             <div className="logotext">EasySol</div>
//           </Navbar.Brand>
//         </LinkContainer>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <div className="NavbarComp">
//               <LinkContainer to="/NewComplaints">
//                 <Nav.Link>New Complaints</Nav.Link>
//               </LinkContainer>
//             </div>

//             <div className="NavbarComp">
//               <LinkContainer to="/ExistingComplaints">
//                 <Nav.Link>Existing Complaints</Nav.Link>
//               </LinkContainer>
//             </div>

//             <div className="NavbarComp">
//               {" "}
//               <LinkContainer to="/Admin">
//                 <Nav.Link>Admin</Nav.Link>
//               </LinkContainer>
//             </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
// }

import { Navbar, Nav } from "react-bootstrap";
import { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { SiSlackware } from "react-icons/si";
<SiSlackware size={30} style={{ fill: "black" }} />;

export default class NavbarComp extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <div className="logo">
          <SiSlackware size={30} style={{ fill: "white" }} />
        </div>
        <LinkContainer to="/">
          <Navbar.Brand>
            <div className="logotext">EasySol</div>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="NavbarComp">
              <LinkContainer to="/NewComplaints">
                <Nav.Link>New Complaints</Nav.Link>
              </LinkContainer>
            </div>

            <div className="NavbarComp">
              <LinkContainer to="/ExistingComplaints">
                <Nav.Link>Existing Complaints</Nav.Link>
              </LinkContainer>
            </div>

            <div className="NavbarComp">
              {" "}
              <LinkContainer to="/Admin">
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
            </div>

            <div className="NavbarComp">
              {" "}
              <LinkContainer to="/User">
                <Nav.Link>User Login</Nav.Link>
              </LinkContainer>
            </div>

            <div className="NavbarComp">
              {" "}
              <LinkContainer to="/Faq">
                <Nav.Link>FAQ</Nav.Link>
              </LinkContainer>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
