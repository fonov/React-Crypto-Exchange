import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Card, CardBody, Row, Col, ButtonGroup, Button, FormGroup, Label, Input, } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import TradingViewWidget from 'react-tradingview-widget';


class Trading extends Component{

    render() {
        return(
            <BasePage>
                <Row>
                    <Col className='mt-3 col-8' md={8} lg={9} xl={10}>
                        <div className="d-flex flex-row">
                            <div className='it-title'>
                                XMR/BTC
                            </div>
                            <div className="d-flex flex-column ml-4">
                                <div className='it-char'>
                                    <span>Price</span>
                                    <span className='text-success'>0.023206</span>
                                </div>
                                <div className='it-char'>
                                    <span>Vol</span>
                                    <span>8,480</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ml-4">
                                <div className='it-char'>
                                    <span>24h</span>
                                    <span className='text-success'>+6.29%</span>
                                </div>
                                <div className='it-char'>
                                    <span>1h</span>
                                    <span className='text-danger'>−0.01%</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ml-4">
                                <div className='it-char'>
                                    <span>Bid</span>
                                    <span className='text-success'>0.023159</span>
                                </div>
                                <div className='it-char'>
                                    <span>Bid</span>
                                    <span className='text-danger'>0.023194</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ml-4">
                                <div className='it-char'>
                                    <span>24H high</span>
                                    <span>0.024957</span>
                                </div>
                                <div className='it-char'>
                                    <span>24H low</span>
                                    <span>0.023100</span>
                                </div>
                            </div>
                        </div>
                        <Card className='mt-3'>
                            <CardBody className='it-trading_view'>
                                <TradingViewWidget
                                    symbol="BITFINEX:BTCUSD"
                                    autosize
                                    locale="ru"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-4' md={4} lg={3} xl={2}>
                        <Card className='mt-4 mr-4'>
                            <CardBody>
                                <div className='text-center'>
                                    <img src={require('../assets/icons/wallet.svg')} className='it-icon'/>
                                    <span className='it-fs16 ml-2 align-middle'>40.00600209 XMR</span>
                                    <span className='it-fs14'>Total 1000.90 USD</span>
                                    <hr className="it-hr-text" data-content="DEMO"/>
                                </div>
                                <div className='text-center'>
                                    <ButtonGroup >
                                        <Button className='bg-success border-0'>
                                        <span className='px-4'>
                                            <FontAwesome name='long-arrow-up' /> Buy
                                        </span>
                                        </Button>
                                        <Button className='bg-light text-dark border'>
                                        <span className='px-4'>
                                            <FontAwesome name='long-arrow-down' /> Sell
                                        </span>
                                        </Button>
                                    </ButtonGroup>
                                </div>
                                <FormGroup className='mt-4'>
                                    <Label for="exampleSelect">Order type</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Limit</option>
                                        <option selected>Market</option>
                                        <option>Stop</option>
                                        <option>Stop-Limit</option>
                                        <option>Trailing stop</option>
                                        <option>Fill or Kill</option>
                                    </Input>
                                </FormGroup>
                                <Label for="total">Price</Label>
                                <div className="input-group">
                                    <input type="text" className="form-control" value='0.023194'/>
                                    <div className="input-group-append">
                                        <span className="input-group-text">BTC</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-row mt-2">
                                    <span className='text-primary mr-2'>Bid</span>
                                    <span className='text-primary mr-2'>Ask</span>
                                </div>
                                <Label for="total" className='mt-2'>Amount</Label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">XMR</span>
                                    </div>
                                </div>
                                <Label for="total" className='mt-2'>Total</Label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">BTC</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-row mt-2">
                                    <span className='text-primary mr-2'>2%</span>
                                    <span className='text-primary mr-2'>5%</span>
                                    <span className='text-primary mr-2'>10%</span>
                                    <span className='text-secondary ml-4'>23%</span>
                                </div>
                                <Button className='bg-success mt-2 border-0' block>
                                    <FontAwesome name='long-arrow-up' />
                                    <span className='ml-2'>Buy Monero</span>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-12' md={12} lg={6} xl={6}>
                        <Card className='mt-4 mr-4'>
                            <CardBody>
                                <Row>
                                    <Col>
                                        <div className="d-flex flex-row">
                                            <span className='it-fs18 mr-4'>Order Book</span>
                                            <ButtonGroup>
                                                <Button className='it-small_btn_gr it-half-opacity bg-light'>Graph</Button>
                                                <Button className='it-small_btn_gr bg-white'>Table</Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="d-flex flex-row-reverse">
                                            <FontAwesome name='share-square-o' />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-4 text-right it-order-book'>
                                    <Col className='tb-1'>
                                        <Row className='it-fs12'>
                                            <Col className='border-bottom'>Sum BTC</Col>
                                            <Col className='border-bottom'>Total XMR</Col>
                                            <Col className='border-bottom'>Size BTC</Col>
                                            <Col className='border-bottom'>Bid</Col>
                                            <Col/>
                                        </Row>
                                        <Row className='it-fs11'>
                                            <Col>0.00017239</Col>
                                            <Col>0.00017239</Col>
                                            <Col>0.00017239</Col>
                                            <Col className='text-success'>0.02316050</Col>
                                            <Col/>
                                        </Row>
                                        <Row className='it-fs11 align-middle'>
                                            <Col className='bg-light'>0.00017239</Col>
                                            <Col className='bg-light'>0.00017239</Col>
                                            <Col className='bg-light'>0.00017239</Col>
                                            <Col className='text-success bg-light'>0.02316050</Col>
                                            <Col>
                                                <div className='bg-success it-rectangle text-white text-center'>
                                                    <FontAwesome name='long-arrow-up' />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='tb-2'>
                                        <Row className='border-bottom it-fs12'>
                                            <Col>Ask</Col>
                                            <Col>Size BTC</Col>
                                            <Col>Total XMR</Col>
                                            <Col>Sum BTC</Col>
                                        </Row>
                                        {
                                            [
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393]
                                            ].map((item, i, array) => (
                                                <Row key={i} className={`${array.length-1 === i ? 'it-half-opacity' : ''} mt-1 it-fs11`}>
                                                    <Col className='text-danger'>{item[0]}</Col>
                                                    <Col>{item[1]}</Col>
                                                    <Col>{item[2]}</Col>
                                                    <Col>{item[3]}</Col>
                                                </Row>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={12} lg={6} xl={6} className='my-4 col-12'>
                        <Card className='mr-4'>
                            <CardBody>
                                <Row>
                                    <Col className='it-fs18'>Market history</Col>
                                    <Col>
                                        <div className="d-flex flex-row-reverse">
                                            <FontAwesome name='share-square-o' />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='it-fs12 pr-4'>
                                        <Row className='it-fs12 mt-2 border-bottom'>
                                            <Col>Time</Col>
                                            <Col>Type</Col>
                                            <Col>Price</Col>
                                            <Col>Amount</Col>
                                            <Col>Total cost</Col>
                                        </Row>
                                        {
                                            [
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                            ].map((item, i, array) => (
                                                <Row className={`mt-1 ${array.length-1===i ? 'it-half-opacity' : ''}`} key={i}>
                                                    <Col>{item[0]}</Col>
                                                    <Col className={item[1] === 'Buy' ? 'text-success' : 'text-danger'}>{item[1]}</Col>
                                                    <Col>{item[2]}</Col>
                                                    <Col>{item[3]}</Col>
                                                    <Col>{item[4]}</Col>
                                                </Row>
                                            ))
                                        }
                                    </Col>
                                    <Col className='it-fs12 pr-4'>
                                        <Row className='it-fs12 mt-2 border-bottom'>
                                            <Col>Time</Col>
                                            <Col>Type</Col>
                                            <Col>Price</Col>
                                            <Col>Amount</Col>
                                            <Col>Total cost</Col>
                                        </Row>
                                        {
                                            [
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                            ].map((item, i, array) => (
                                                <Row className={`mt-1 ${array.length-1===i ? 'it-half-opacity' : ''}`} key={i}>
                                                    <Col>{item[0]}</Col>
                                                    <Col className={item[1] === 'Buy' ? 'text-success' : 'text-danger'}>{item[1]}</Col>
                                                    <Col>{item[2]}</Col>
                                                    <Col>{item[3]}</Col>
                                                    <Col>{item[4]}</Col>
                                                </Row>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </BasePage>
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

export default connect(mapStateToProps, mapDispatchToProps)(Trading);