import React, { Component } from 'react';
import {BasePage} from '../elements'
import PureTrading from './pure/PureTrading'
import {set_top_panel} from "../actions/menu";
import {connect} from "react-redux";


class Trading extends Component{

    componentDidMount() {
        const {set_top_panel} = this.props;

        set_top_panel(2)
    }

    render() {

        return(
            <BasePage>
                <PureTrading/>
            </BasePage>
        )
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        set_top_panel: number => dispatch(set_top_panel(number)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trading);