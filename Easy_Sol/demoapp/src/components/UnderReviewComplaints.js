import { Button, Table } from "react-bootstrap";

import React, { Component } from "react";

export default class UnderReviewComplaints extends Component {
  render() {
    return (
      <div className="Complaint_body">
        <h2 align="center">Under-Review Complaints</h2>
        <hr />
        <Table striped bordered hover className="table">
          <thead>
            <tr className="bg-primary">
              <th>User</th>
              <th>Complaint description</th>
              <th>Move</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-primary">
              <td>Shrey</td>
              <td>Electricity problem</td>
              <td>
                <Button variant="success">Mark as Solved</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
