import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import "../index.css";

export default class TableBordered extends React.Component {
  render() {
    return (
      <div>
        <Table className="mb-0" bordered>
          <thead className="tablehead">
            <tr>
              <th id="uid">UID</th>
              <th>USER NAME</th>
              <th>DISCORD TAG</th>
              <th>CHARACTER 1</th>
              <th>CHARACTER 2</th>
              <th>CHARACTER 3</th>
            </tr>
          </thead>
          <tbody className="tablebody">
            <tr>
                <td scope="row"><Link to={"/tables/account-step2"} id="account-table-link">19248</Link></td>
                <td><Link to={"/tables/account-step2"} id="account-table-link">Alaska</Link></td>
                <td><Link to={"/tables/account-step2"} id="account-table-link">NaughtyRyuk#1337</Link></td>
                <td><Link to={"/tables/account-step2"} id="account-table-link">Gregory Garcia</Link></td>
                <td><Link to={"/tables/account-step2"} id="account-table-link">Richard Colorado</Link></td>
                <td><Link to={"/tables/account-step2"} id="account-table-link">N/A</Link></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
