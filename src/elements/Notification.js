import React, { Component } from 'react';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import ReactSVG from 'react-svg';
import {switch_notification} from "../actions/menu";


class Notification extends Component {

    render() {

        const {theme, switch_notification} = this.props;

        return (
            <div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span className='it-fs13 it-half-opacity'>Notifications</span>
                    </div>
                    <div className='d-flex flex-row icon-action'>
                        <ReactSVG
                            path={require('../assets/icons/cog.svg')}
                            style={{width: 14, marginRight: 10}}
                        />
                        <div onClick={() => switch_notification()}>
                            <ReactSVG
                                path={require('../assets/icons/close_bg.svg')}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-3 lists'>
                    {[1,2,3,4,5,5,4,32,2,3,2,4].map((item, index) => (
                        <div className={`list ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex flex-column mr-4'>
                                    <span className='it-fs14'>04:44</span>
                                    <span className='it-fs11'>27/11/2017 </span>
                                </div>
                                <div className='it-fs13'>
                                    Bbq Grilling Versus Smoking The Great Debate Bbq Grilling Versus Smoking The Great Debate Bbq Grilling Versus Smoking The Great Debate
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        my_orders: state.menu.my_orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        switch_notification: () => dispatch(switch_notification())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);