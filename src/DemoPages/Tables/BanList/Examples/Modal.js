import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <span className="d-inline-block mb-2 mr-2">
                <p onClick={this.toggle}>ryuk</p>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="modal-main">
                    <ModalBody>
                        <div className="modal-title"><p id="modal-title">ACTIONS</p></div>
                        <div className="action-buttons">
                            <Button color="primary" onClick={this.toggle}>Unlock</Button>
                            <Button color="primary" onClick={this.toggle}>Cancel</Button>
                        </div>
                    </ModalBody>
                        
                </Modal>
            </span>
        );
    }
}

export default ModalExample;
