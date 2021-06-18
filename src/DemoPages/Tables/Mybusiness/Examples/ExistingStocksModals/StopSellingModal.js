import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class StopSellingModal extends React.Component {
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
        <i className="fas fa-hand-paper" onClick={this.toggle} data data-toggle="tooltip" data-placement="top" title="Stop selling this item"></i>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          id="list-faction-modal"
        >
          <ModalBody id="faction-info-modal">
            <i className="fas fa-times times-icon" onClick={this.toggle}></i>
            <p className="faction-info-modal-title">Stop Selling</p>
            <p>Are you sure to stop the sale of this item ?</p>

            <div>
              <Button onClick={this.toggle}>Cancel</Button>
              <Button>Yes</Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default StopSellingModal;
