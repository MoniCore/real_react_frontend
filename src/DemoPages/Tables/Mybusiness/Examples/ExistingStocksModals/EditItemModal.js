import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from "reactstrap";

class EditItemModal extends React.Component {
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
        <i className="fas fa-edit" onClick={this.toggle} data data-toggle="tooltip" data-placement="top" title="Edit price"></i>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          id="list-faction-modal"
        >
          <ModalBody id="faction-info-modal">
            <i className="fas fa-times times-icon" onClick={this.toggle}></i>
            <p className="faction-info-modal-title">Edit price for ...</p>
            <div className="modal-inner-input"><p>Current price :</p><p>xxx</p></div>
            <div className="modal-inner-input"><p>New price :</p><Input className="amount-input"></Input></div>
            <div>
              <Button onClick={this.toggle}>Cancel</Button>
              <Button>Set New Price</Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditItemModal;
