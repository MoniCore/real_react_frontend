import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import paymentwall from '../../../assets/images/logos/paymentwall.png';

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
                <Button color="primary" onClick={this.toggle}>BUY</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <div className="modal-title"><p id="modal-title">CHOOSE YOUR PAYMENT METHOD</p></div>
                        <div className="method-container">
                            <div className="creditcard">
                                <div className="method-icon"><i class="fas fa-credit-card fa-4x"></i></div>
                                <p>Credit Card</p>
                            </div>
                            <div className="paymentwall">
                                <div className="method-icon"><img src={paymentwall} id="paymentwall" /></div>
                                <p id="wall-letter">Paymentwall</p>
                            </div>
                            <div className="paypal">
                                <div className="method-icon"><i class="fab fa-paypal fa-4x"></i></div>
                                <p>PayPal</p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </span>
        );
    }
}

export default ModalExample;
