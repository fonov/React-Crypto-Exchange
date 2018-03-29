import React, { Component } from 'react';
import {connect} from "react-redux";
import { Modal } from 'reactstrap';
import {LineChart, Line, CartesianGrid, ReferenceLine, XAxis, ResponsiveContainer} from 'recharts';
import {FacebookIcon, TwitterIcon} from 'react-share';
import {set_order_close_modal} from '../actions/menu'
import ReactSVG from 'react-svg';


class OrderCloseModal extends Component{

    render() {

        const {order_close_modal, set_order_close_modal, theme} = this.props;

        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];

        return (
            <Modal
                isOpen={order_close_modal}
                toggle={() => set_order_close_modal(false)}
                className={`it-modal ${theme.night_class}`}
            >
                <div className='it-close' onClick={() => set_order_close_modal(false)}>
                    <ReactSVG
                        path={require('../assets/icons/close_bg.svg')}
                    />
                </div>
                <div className='text-center it-fs24'>Order closed</div>
                <div className='mt-4'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column'>
                            <span className='it-medium text-primary it-fs18'>XMR/BTC</span>
                            <div className='mt-4'>
                                <span className='it-fs14 it-half-opacity'>Order profit</span>
                            </div>
                            <div className='text-success it-medium it-fs24'>
                                +2.390187
                            </div>
                            <div className='mt-4'>
                                <span className='it-fs14 it-half-opacity'>Order profit</span>
                            </div>
                            <div className='it-medium it-fs18'>
                                $ 48.10
                            </div>
                            <div className='mt-4'>
                                <span className='it-fs14 it-half-opacity'>Duration</span>
                            </div>
                            <div className='it-medium it-fs18'>
                                189 hours 16 min
                            </div>
                        </div>
                        <ResponsiveContainer width='80%' height={350}>
                            <LineChart data={data} margin={{left: 100}}>
                                <XAxis dataKey="name" hide={true}/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <ReferenceLine x="Page C" stroke="red" label="16189.1836"/>
                                <ReferenceLine x="Page F" stroke="green" label="16189.1836"/>
                                <Line type='monotone' dataKey='pv' stroke='#f26451' strokeWidth={2} dot={{ stroke: 'red', strokeWidth: 2 }}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='d-flex justify-content-center social'>
                        <div className='d-flex flex-row social'>
                            <FacebookIcon size={34} round={true}/>
                            <span className='ml-2 it_light_opacity it-fs12'>Share on Facebook</span>
                        </div>
                        <div className='d-flex flex-row social'>
                            <TwitterIcon size={34} round={true} />
                            <span className='ml-2 it_light_opacity it-fs12'>Share on Twitter</span>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        order_close_modal: state.modals.order_close
    }
};

const mapDispatchToProps = dispatch => {
    return {
        set_order_close_modal: modal => dispatch(set_order_close_modal(modal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderCloseModal);