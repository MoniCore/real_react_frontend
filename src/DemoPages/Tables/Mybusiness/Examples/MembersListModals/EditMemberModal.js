import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

// import Switch from "../Switch";

class EditMemberModal extends React.Component {
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
        <i className="fa fa-user-edit" onClick={this.toggle} data data-toggle="tooltip" data-placement="top" title="Edit hierarchical rank in the company"></i>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          id="list-faction-modal"
        >
          <ModalBody id="faction-info-modal">
            <i className="fas fa-times times-icon" onClick={this.toggle}></i>
            <p className="faction-info-modal-title">User Name</p>
            <p id="current-rank">current rank: </p>
            <p>new range to add</p>

            <div>
              <Button onClick={this.toggle}>Cancel</Button>
              <Button>Accept</Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditMemberModal;
