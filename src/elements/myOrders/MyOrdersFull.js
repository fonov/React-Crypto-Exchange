import React, { Component } from 'react';
import {connect} from "react-redux";
import FontAwesome from 'react-fontawesome'
import { Button, Progress, Row, Col, Input, Form } from 'reactstrap';
import ReactSVG from 'react-svg';
import {set_my_orders, set_top_panel} from "../../actions/menu";
import {push} from "react-router-redux";


class MyOrdersFull extends Component{

    render() {

        const {set_my_orders, set_top_panel} = this.props;

        return (
            <div>
                <Row className='justify-content-between mt-3 ml-4'>
                    <Col>
                        <p className='it_page_title'>My orders</p>
                    </Col>
                    <Col>
                        <div className='it_cycle_times' onClick={() => {
                            set_my_orders(0);
                            set_top_panel(2)
                        }}>
                            <FontAwesome name='times' className=''/>
                        </div>
                    </Col>
                </Row>
                <div className='d-flex justify-content-between mt-2'>
                    <Form inline className='ml-4'>
                        <div className="d-flex flex-row it-btn-group mr-4">
                            <div className="it-btn active ">Opened</div>
                            <div className="it-btn border-left-0 "><span>Closed</span></div>
                        </div>
                        <Input type="select" name="select" id="exampleSelect" className='mr-2 form-control-sm'>
                            <option>19/10/2016</option>
                        </Input>
                        <div className='it-delimiter' />
                        <Input type="select" name="select" id="exampleSelect" className='ml-2 form-control-sm'>
                            <option>19/10/2016</option>
                        </Input>
                        <Input type="select" name="select" id="exampleSelect" className='ml-4 mr-2 form-control-sm'>
                            <option>All</option>
                        </Input>
                        <div className='it-delimiter' />
                        <Input type="select" name="select" id="exampleSelect" className='ml-2 mr-4 form-control-sm'>
                            <option>BTC</option>
                        </Input>
                        <Input type="select" name="select" id="exampleSelect" className='form-control-sm'>
                            <option>All type</option>
                        </Input>
                        <Input type="checkbox" className='ml-4'/> <span className='it_light_opacity'>Hide all canceled</span>
                    </Form>
                    <div>
                        <Button color='light' className='border ml-4 export_btn_big it-fs14'>
                                    <span>
                                        <FontAwesome name='file' className='mr-2'/> Export order list
                                    </span>
                        </Button>
                    </div>
                </div>
                <div className='mt-3 mx-4'>
                    <table className="table table-night">
                        <thead className='mt-3'>
                        <tr>
                            <th scope="col" style={{paddingTop: 3.5+'em'}}>Pair</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actual price</th>
                            <th scope="col">Order price</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Total</th>
                            <th scope="col">Progress</th>
                            <th scope="col">Profit</th>
                            <th scope="col">Created</th>
                            <th scope="col" />
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className='align-middle'>
                                <strong className='text-primary'>XMR/BTC</strong>
                            </td>
                            <td className='text-danger align-middle arrow'>
                                <div className='d-flex flex-row'>
                                    <ReactSVG
                                        path={require('../../assets/icons/raw_down.svg')}
                                    />
                                    <span>
                                            Market
                                        </span>
                                </div>
                            </td>
                            <td className='align-middle'>0.023238</td>
                            <td className='align-middle'>0.02315878</td>
                            <td className='align-middle'>0.33023974</td>
                            <td className='align-middle'>0.00764794 BTC</td>
                            <td className='align-middle'>
                                <Progress color="success" value="50">50%</Progress>
                            </td>
                            <td className='text-success align-middle'>+18.09 %</td>
                            <td className='align-middle'>04:44 27/11/2017 </td>
                            <td>
                                <div className='it_cycle_times position-static'>
                                    <ReactSVG
                                        path={require('../../assets/icons/close_bg.svg')}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>
                                <strong className='text-primary'>
                                    <strong className='text-primary'>XMR/BTC</strong>
                                </strong>
                            </td>
                            <td className='text-danger align-middle arrow'>
                                <div className='d-flex flex-row'>
                                    <ReactSVG
                                        path={require('../../assets/icons/raw_down.svg')}
                                    />
                                    <span>
                                            Market
                                        </span>
                                </div>
                            </td>
                            <td className='align-middle'>0.023238</td>
                            <td className='align-middle'>0.02315878</td>
                            <td className='align-middle'>0.33023974</td>
                            <td className='align-middle'>0.00764794 BTC</td>
                            <td className='align-middle'>
                                <Progress color="success" value="50">50%</Progress>
                            </td>
                            <td className='text-success align-middle'>+18.09 %</td>
                            <td className='align-middle'>04:44 27/11/2017 </td>
                            <td>
                                <div className='it_cycle_times position-static'>
                                    <ReactSVG
                                        path={require('../../assets/icons/close_bg.svg')}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>
                                <strong className='text-primary'>XMR/BTC</strong>
                            </td>
                            <td className='text-danger align-middle arrow'>
                                <div className='d-flex flex-row'>
                                    <ReactSVG
                                        path={require('../../assets/icons/raw_down.svg')}
                                    />
                                    <span>
                                            Market
                                        </span>
                                </div>
                            </td>
                            <td className='align-middle'>0.023238</td>
                            <td className='align-middle'>0.02315878</td>
                            <td className='align-middle'>0.33023974</td>
                            <td className='align-middle'>0.00764794 BTC</td>
                            <td className='align-middle'>
                                <Progress color="success" value="50">50%</Progress>
                            </td>
                            <td className='text-success align-middle'>+18.09 %</td>
                            <td className='align-middle'>04:44 27/11/2017 </td>
                            <td>
                                <div className='it_cycle_times position-static'>
                                    <ReactSVG
                                        path={require('../../assets/icons/close_bg.svg')}
                                    />
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <Button color='light' className='border ml-4 export_btn_small it-fs14'>
                       <span>
                            <FontAwesome name='file' className='mr-2'/> Export order list
                        </span>
                </Button>
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
        set_top_panel: number => dispatch(set_top_panel(number)),
        set_my_orders: number => dispatch(set_my_orders(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersFull);