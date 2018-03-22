import React, { Component } from 'react';
import {connect} from "react-redux";
import { Modal } from 'reactstrap';
import ReactSVG from 'react-svg';


class BaseSingModal extends Component{

    render() {

        const { theme, children, isOpen, toggle} = this.props;

        return (
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                className={`it-modal it-modal-sing ${theme.night_class}`}
                wrapClassName='it-modal-sing-wrap'
            >
                <div className='it-close' onClick={toggle}>
                    <ReactSVG
                        path={require('../../../assets/icons/close_bg.svg')}
                    />
                </div>
                {children}
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseSingModal);