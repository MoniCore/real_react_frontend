import React from 'react';
import { Table, Tooltip } from 'reactstrap';
import '../index.css';


export default class Factiontable1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <div id="business-table-container">
          <Table className="mb-0" bordered>
            <thead className="tablehead">
              <tr>
                <th>Faction Name</th>
                <th>Leader's</th>
                <th>Members</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="faction-tablebody">
              <tr>
                <td scope="row">Police Department</td>
                <td scope="row">List</td>
                <td scope="row">32</td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <i id="edit" class="fas fa-user-edit" data-toggle="tooltip" data-placement="top" title="Edit Faction"></i>
                  <i class="fas fa-users" data-toggle="tooltip" data-placement="top" title="Member List"></i>
                  <i class="fas fa-car-side" data-toggle="tooltip" data-placement="top" title="Vehicle List"></i>
                  <i class="fas fa-eraser" data-toggle="tooltip" data-placement="top" title="Clean Faction"></i>
                </td>
              </tr></tbody>
          </Table>
        </div>
      </div>
    );
  }
}
