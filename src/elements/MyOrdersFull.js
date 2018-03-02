import React, { Component } from 'react';
import {connect} from "react-redux";
import FontAwesome from 'react-fontawesome'
import { ButtonGroup, Button, Progress, Row, Col, Input, Form, Label, FormGroup } from 'reactstrap';


class MyOrdersFull extends Component{

    render() {

        const {} = this.props;

        return (
            <div className='my_orders_full'>
                <Row className='justify-content-between mt-3'>
                    <Col className='ml-4'>
                        <p className='it_page_title'>My orders</p>
                    </Col>
                    <Col>
                        <div className='it_cycle_times'>
                            <FontAwesome name='times' className=''/>
                        </div>
                    </Col>
                </Row>

                <Form inline className='mt-2 ml-4'>
                    <ButtonGroup className='mr-4'>
                        <Button color='light' className='bg-white border'>Opened</Button>
                        <Button color='light' className='border'>Closed</Button>
                    </ButtonGroup>
                    <Input type="select" name="select" id="exampleSelect" className='mr-2'>
                        <option>19/10/2016</option>
                    </Input>
                    <div className='it-delimiter' />
                    <Input type="select" name="select" id="exampleSelect" className='ml-2'>
                        <option>19/10/2016</option>
                    </Input>
                    <Input type="select" name="select" id="exampleSelect" className='ml-4 mr-2'>
                        <option>All</option>
                    </Input>
                    <div className='it-delimiter' />
                    <Input type="select" name="select" id="exampleSelect" className='ml-2 mr-4'>
                        <option>BTC</option>
                    </Input>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>All type</option>
                    </Input>
                    <Input type="checkbox" className='ml-4'/> Hide all canceled
                    <Button color='light' className='border ml-4 export_btn_big'>
                        <FontAwesome name='file'/> Export order list
                    </Button>
                </Form>

                <div className='mt-3 mx-4'>
                    <table className="table ">
                        <thead className='mt-3'>
                            <tr>
                                <th scope="col">Pair</th>
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
                            <td className='align-middle'>XMR/BTC</td>
                            <td className='text-danger align-middle'>
                                <FontAwesome name='long-arrow-down' /> Market
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
                                    <FontAwesome name='times' className=''/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>XMR/BTC</td>
                            <td className='text-danger align-middle'>
                                <FontAwesome name='long-arrow-down' /> Market
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
                                    <FontAwesome name='times' className=''/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>XMR/BTC</td>
                            <td className='text-danger align-middle'>
                                <FontAwesome name='long-arrow-down' /> Market
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
                                    <FontAwesome name='times' className=''/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <Button color='light' className='border ml-4 export_btn_small'>
                    <FontAwesome name='file'/> Export order list
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersFull);