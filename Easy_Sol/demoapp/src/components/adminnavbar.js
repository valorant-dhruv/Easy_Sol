import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";

export default function AdminNavbar() {
  return (
    <div className="Complaint_body">
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="NavbarComp">
              {" "}
              <LinkContainer to="/complainttable">
                <Nav.Link>Complaint table</Nav.Link>
              </LinkContainer>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <h1>Welcome to the admin page</h1>
    </div>
  );
}
