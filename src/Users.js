import React, { useState, Fragment, useEffect } from "react";
//import {Button} from 'react-bootstrap/Button'
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
      data.json().then(result=> {
        setUser(result.data);
      });
    });
  }, []);
  return (
    <Fragment>
      <h1>User listing here</h1>

      {/* <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.employee_name}</td>
              <td>{item.employee_salary}</td>
              <td>{item.employee_age}</td>
              <td>{item.profile_image}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* {
                // this is user listing
                // user.map((item,i)=>
                //     <div key={i}>{item.name}, {item.email}, {item.mobile}</div>
                // )

                /* Now lets check conditions *
                user.length===4?<div>Yes, user list have 5 rows</div>:<div>No length should be 5.</div>

            } */}
    </Fragment>
  );
}

export default Users;
