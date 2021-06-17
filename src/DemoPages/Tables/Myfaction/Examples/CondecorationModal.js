import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Switch from "./Switch";

class ListModal extends React.Component {
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
        <i className="fas fa-award" onClick={this.toggle} data  data-toggle="tooltip" data-placement="top" title="Condecoration"></i>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          id="expel-faction-modal"
        >
          <ModalBody id="faction-info-modal">
            <i className="fas fa-times times-icon" onClick={this.toggle}></i>
            <p className="faction-info-modal-title">User Name</p>
            <p>Are you sure to expel this member from the company ?</p>
            <div>
              <Button onClick={this.toggle}>Cancel</Button>
              <Button>Expel</Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ListModal;
