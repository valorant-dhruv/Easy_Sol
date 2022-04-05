import { Button, Table } from "react-bootstrap";

import React, { Component, useEffect, useState } from "react";

export default function PendingComplaints(props) {
  let [info, setinfo] = useState([]);
  let [change, setchange] = useState(false);
  let [remove, setremove] = useState(false);

  async function transfer(data) {
    await fetch("http://localhost:5000/api/admin/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
  }

  function getdata() {
    fetch("http://localhost:5000/api/user/map", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(async (data) => {
        await setinfo(data);
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getdata();

  const arr = info;

  return (
    <div className="Complaint_body">
      <Table striped bordered hover className="table">
        <thead>
          <tr className="bg-primary">
            <th>User</th>
            <th>Complaint description</th>
            <th>Status</th>
            <th>Move</th>
          </tr>
        </thead>
        {arr.map((data) => {
          return (
            <tbody>
              <tr className="bg-primary">
                <td>{data.names}</td>
                <td>{data.description}</td>
                <td>{data.status}</td>
                {data.status == "Pending" ? (
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => {
                        transfer(data);
                      }}
                    >
                      Move to Under Review
                    </Button>
                  </td>
                ) : (
                  <td>
                    {" "}
                    <Button variant="success">Mark as complete</Button>
                  </td>
                )}
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}
