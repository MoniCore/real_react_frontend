import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { toast } from 'react-toastify';

const Radio = ({ options, name, onChange, checked = false }) => {
  return Object.keys(options).map((k) => {
    const option = options[k];

    return (
      <div className="form-check" key={`${name}-${option}`}>
        <input
          className="form-check-input"
          id={option}
          type="radio"
          name={name}
          value={option}
          checked={option === checked}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor={option}>
          {option}
        </label>
      </div>
    );
  });
};

const check = {
    certified: "certified",
    not_certified: "not-certified"
}

function getType(type) {
  switch (type) {
    case "default":
    default:
      return "certified";
    case "not-certified":
      return "not-certified";
  }
}

class ModalExample extends React.Component {
  //modal functions

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

  handleRadioOrSelect = (e) =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <span className="d-inline-block mb-2 mr-2" id="list-content">
        <p onClick={this.toggle}>ryuk</p>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          id="queue-modal-main"
        >
          <ModalBody id="queue-modal-body">
            <div className="queue-modal-title">
              <p id="queue-modal-title">
                <b>CERTIFYING:</b>helloworld 28
              </p>
            </div>
            <div className="queue-questions">
              <p id="queue-questions">
                1) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <textarea row="5" type="text" className="queue-answer" />
            </div>
            <div className="queue-questions">
              <p id="queue-questions">
                2) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <textarea type="text" className="queue-answer" />
            </div>
            <div className="queue-horizon-line"></div>
            <Radio
              options={check}
              name="type"
              checked={this.state.type}
              onChange={this.handleRadioOrSelect}
            />
            <p id="comment-user">Type a comment for user:</p>
            <textarea className="queue-answer"></textarea>
            <div className="queue-action-buttons">
              <Button color="danger" onClick={this.toggle}>
                Close
              </Button>
              <Button color="primary" onClick={this.toggle}>
                Confirm
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </span>
    );
  }
}

export default ModalExample;
