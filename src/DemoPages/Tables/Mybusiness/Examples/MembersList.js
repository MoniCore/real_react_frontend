import React from 'react';
import { Table } from 'reactstrap';
import '../index.css';

import InformationModal from './MembersListModals/InformationModal';
import EditMemberModal from './MembersListModals/EditMemberModal';
import ExpelMemberModal from './MembersListModals/ExpelMemberModal'


export default class MembersList extends React.Component {
  render() {
    return (
      <div>
        <p id="list-name">Members List</p>
        <div id="business-table-container">
          <Table className="mb-0" bordered>
            <thead className="tablehead">
              <tr>
                <th>Account</th>
                <th>Character</th>
                <th>Rank</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="faction-tablebody">
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <InformationModal />
                  <EditMemberModal />
                  <ExpelMemberModal />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
