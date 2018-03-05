import React, { Component } from 'react';
import {LeftPanel, TopPanel} from './index'
import {push} from "react-router-redux";
import {connect} from "react-redux";


class BasePage extends Component{

    render() {

        const {children, active = [false, false, true], wallet_active=false, orders_active=true, analytics_active=false,
            traders_active = false, message_active = false, theme} = this.props;

        return (
            <div className={`it-container ${theme.night_class}`}>
                <LeftPanel
                    my_orders_badge={2}
                    wallet_active={wallet_active}
                    orders_active={orders_active}
                    analytics_active={analytics_active}
                    traders_active={traders_active}
                    message_active={message_active}
                />
                <TopPanel active={active} />
                <div className='it-page'>
                    {children}
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BasePage);