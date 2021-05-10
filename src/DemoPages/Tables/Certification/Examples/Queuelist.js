import React from 'react';
import { Table } from 'reactstrap';
import '../index.css';
import QueueModal from './QueueModal';


export default class Queuelist extends React.Component {
  render() {
    return (
    <div>
      <Table className="mb-0" bordered>
        <thead className="tablehead">
          <tr>
            <th id="queueuid">UID</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody className="queue-tablebody">
          <tr>
            <th scope="row">19248</th>
            <td><QueueModal /></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}
