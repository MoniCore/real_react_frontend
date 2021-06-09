import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Switch from "./Switch";

class InformationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div className="faction-info-modal-container">
        <i className="fas fa-info-circle info-awesome" onClick={this.toggle} data  data-toggle="tooltip" data-placement="top" title="Information"></i>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          id="info-faction-modal"
        >
          <ModalBody id="faction-info-modal">
            <i className="fas fa-times times-icon" onClick={this.toggle}></i>
            <p className="faction-info-modal-title">Information</p>
            <hr id="faction-info-modal-hr" />
            <div className="faction-info-parent">
              <div className="faction-info-modal-left">
                <div><p>Contact Date :</p><p> 02/06/2021-16:64 CET</p></div>
                <div><p>Contact Manager :</p><p> Robin Schutz</p></div>
                <div><p>Last rank modification :</p><p> 03/06/2021-22:03 CET</p></div>
                <div><p>Previous rank :</p><p> Cadet(1)</p></div>
                <div><p>Current rank :</p><p> Officer(3)</p></div>
                <div><p>Who changed the last rank :</p><p> Francisco Akme</p></div>
                <div><p>Total hours in the faction :</p><p> 24</p></div>
                <div><p>Hours in service :</p><p> 3</p></div>
              </div>
              <div className="faction-info-modal-right">
                <p id="sanction-staff">Last sanction by the staff</p>
                <div><p>- Roberto Perez</p>, was sanctioned for MG by <p> Flussen</p></div>
                <div><p>- Roberto Perez</p>, was sanctioned for MG by <p> Flussen</p></div>
                <div><p>- Roberto Perez</p>, was sanctioned for MG by <p> Flussen</p></div>
                <div><p>- Roberto Perez</p>, was sanctioned for MG by <p> Flussen</p></div>
                <div><p>- Roberto Perez</p>, was sanctioned for MG by <p> Flussen</p></div>
                <div><p>- Roberto Perez</p>, was sanctioned for MG by <p> Flussen</p></div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default InformationModal;
