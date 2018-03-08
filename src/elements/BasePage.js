import React, { Component } from 'react';
import {LeftPanel, TopPanel} from './index'
import {connect} from "react-redux";
import OrderCloseModal from './OrderCloseModal'


class BasePage extends Component{

    render() {

        const {children, active = [false, false, true], wallet_active=false, orders_active=true, analytics_active=false,
            traders_active = false, message_active = false, theme, order_close_modal} = this.props;

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
                    <div className='it-page'>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        order_close_modal: state.menu.order_close_modal
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BasePage);