import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from './index'
import {push} from "react-router-redux";
import PureTrading from '../components/pure/PureTrading'
import {OpenPageAction} from '../actions/LeftPage'


class BaseLeftPage extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {OpenPageAction} = this.props;

        OpenPageAction()
    }

    render() {

        const {BasePageProps, children, LeftPage} = this.props;

        return (
            <BasePage {...BasePageProps}>
                <PureTrading/>
                <div className={`it-page ${!LeftPage ? 'load': ''}`}>
                    {children}
                </div>
            </BasePage>
        )
    }
}

const mapStateToProps = state => {
    return {
        LeftPage: state.LeftPage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        OpenPageAction: () => dispatch(OpenPageAction()),
        push: url => dispatch(push(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseLeftPage);