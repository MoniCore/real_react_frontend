import React from 'react';
import { Table } from 'reactstrap';
import '../index.css';
import Banmodal from './Modal';


export default class Banlist extends React.Component {
  render() {
    return (
    <div>
      <Table className="mb-0" bordered>
        <thead className="tablehead">
          <tr>
            <th id="uid">UID</th>
            <th>USER NAME</th>
            <th>DISCORD TAG</th>
            <th>RESON OF LOCKS</th>
            <th>ADMINISTRATOR</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody className="tablebody">
          <tr>
            <th scope="row">19248</th>
            <td><Banmodal /></td>
            <td>NaughtyRyuk#1337</td>
            <td>Cheats</td>
            <td>Flussen</td>
            <td>17/02/2021-22:34</td>
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
