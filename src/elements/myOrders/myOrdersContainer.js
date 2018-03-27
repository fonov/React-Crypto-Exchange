import React, { Component } from 'react';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {MyOrdersFull, MyOrders} from '../index'
import {Motion, spring} from 'react-motion';


class MyOrdersContainer extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        const {my_orders} = this.props;

        return (
            <div>
                <Motion defaultStyle={{width: 0, visibility: 0}} style={{
                    width: spring(my_orders === 1 ? 290 : 0),
                    visibility: spring(my_orders === 1 ? 1 : 0)
                }}>
                    {
                        value => (
                            <div className='my_orders' style={{width: value.width}}>
                                <div style={{visibility: value.visibility > 0.5 ? 'visible' : 'hidden'}}>
                                    <MyOrders />
                                </div>
                            </div>
                        )
                    }
                </Motion>
                <Motion defaultStyle={{width: 0}} style={{
                    width: spring(my_orders === 2 ? 100 : 0)
                }}>
                    {
                        value => (
                            <div className='my_orders_full' style={{
                                width: `calc(${value.width}% - 94px)`,
                                display: value.width > 10 ? 'block' : 'none',
                                minWidth: value.width === 100 ? 936 : 0
                            }}>
                                <MyOrdersFull />
                            </div>
                        )
                    }
                </Motion>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        my_orders: state.menu.my_orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersContainer);