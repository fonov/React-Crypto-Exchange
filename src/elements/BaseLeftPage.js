import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from './index'
import {push} from "react-router-redux";
import PureTrading from '../components/pure/PureTrading'
import {OpenPageAction} from '../actions/LeftPage'
import {Motion, spring, presets} from 'react-motion';


class BaseLeftPage extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {OpenPageAction} = this.props;

        OpenPageAction()
    }

    render() {

        const {BasePageProps, children, LeftPage} = this.props,
            page_width = window.innerWidth-93;

        return (
            <BasePage {...BasePageProps}>
                <PureTrading/>
                <Motion defaultStyle={{
                    width: page_width/2,
                    opacity: 0
                }} style={{
                    width: spring(LeftPage ? page_width : page_width/2),
                    opacity: spring(LeftPage ? 1 : 0)
                }}>
                    {
                        value => (
                            <div className='it-page' style={{
                                width: value.width,
                                opacity: value.opacity,
                                overflowY: value.opacity === 1 ? 'scroll' : 'hidden'
                            }}>
                                {children}
                            </div>
                        )
                    }
                </Motion>
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