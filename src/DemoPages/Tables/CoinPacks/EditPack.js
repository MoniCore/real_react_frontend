import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Switch from "./Switch";

import paymentwall from "../../../assets/images/logos/paymentwall.png";

class EditPack extends React.Component {
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
      <span className="d-inline-block mb-2 mr-2">
        <Button color="primary" onClick={this.toggle}>
          EDIT
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          id="pack-edit-modal"
        >
          <ModalBody id="pack-edit-modal-content">
            <div className="pack-edit-left">
              <p id="editing-packs">
                <b>Editing:</b> "PACK #1"
              </p>
              <label>Amount</label>
              <br />
              <input
                className="amount-input"
                name="amount"
                type="number"
                autocomplete="off"
              />
              <br />
              <label>Price</label>
              <br />
              <input
                className="price-input"
                name="amount"
                type="number"
                autocomplete="off"
              />
              <br />
              <label>Offer</label>
              <br />
              <input
                className="offer-input"
                name="amount"
                type="number"
                autocomplete="off"
              />
              <span id="percent">%</span>
              <span id="commit">Use "0" if you don't want to put offers</span>
              <br />
            </div>
            <div className="pack-edit-right">
              <p id="editing-packs">
                <b>TAGS and BONUS</b>
              </p>
              <div className="recommended-container">
                <Switch />
                <div>
                <p id="recommended">Recommended</p>
                </div>
              </div>
              <label>Bonus</label>
              <br />
              <select className="bonus">
                <option value="0">Choose a bonus option</option>
              </select>
              <div className="save-cancel-buttons">
                <Button color="danger" onClick={this.toggle} id="bonus-cancel">
                  Cancel
                </Button>
                <Button color="primary" onClick={this.toggle} id="bonus-save">
                  Save
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </span>
    );
  }
}

export default EditPack;
