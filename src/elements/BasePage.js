import React, { Component } from 'react';
import {LeftPanel, TopPanel, Notification} from './index'
import {connect} from "react-redux";
import OrderCloseModal from './OrderCloseModal'
import {Motion, spring} from 'react-motion';


class BasePage extends Component{

    render() {

        const {children, active = [false, false, true], wallet_active=false, orders_active=true, analytics_active=false,
            traders_active = false, message_active = false, theme, order_close_modal, notification} = this.props;

        return (
            <div>
                <OrderCloseModal />
                <div className={`it-container ${theme.night_class}`} style={{filter: order_close_modal ? 'blur(5px)' : 'none'}}>
                    <LeftPanel
                        my_orders_badge={2}
                        wallet_active={wallet_active}
                        orders_active={orders_active}
                        analytics_active={analytics_active}
                        traders_active={traders_active}
                        message_active={message_active}
                    />
                    <TopPanel active={active} />
                    {children}
                    <Motion defaultStyle={{right: -350}} style={{right: spring(notification ? 4 : -350)}}>
                        {value => (
                            <div className='it-notification' style={{right: value.right}}>
                                <Notification />
                            </div>
                        )}
                    </Motion>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        order_close_modal: state.menu.order_close_modal,
        my_orders: state.menu.my_orders,
        notification: state.menu.notification,
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BasePage);