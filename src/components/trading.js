import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Card, CardBody, Row, Col, ButtonGroup, Button, FormGroup, Label, Input, Table} from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import TradingViewWidget from 'react-tradingview-widget';
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import ReactSVG from 'react-svg';


class Trading extends Component{

    render() {

        const {theme, push} = this.props;

        return(
            <BasePage>
                <div className='it-trading'>
                    <div className='d-flex flex-row mb-2'>
                        <div className='mt-3 main-view'>
                            <div className="d-flex flex-row">
                                <div className='it-title'>
                                    XMR/BTC
                                </div>
                                <div className="d-flex it-char-flex">
                                    <div className='it-char'>
                                        <span>Price</span>
                                        <span className='text-success'>0.023206</span>
                                    </div>
                                    <div className='it-char'>
                                        <span>Vol</span>
                                        <span>8,480</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column ml-4 it-char-flex-other">
                                    <div className='it-char'>
                                        <span>24h</span>
                                        <span className='text-success'>+6.29%</span>
                                    </div>
                                    <div className='it-char'>
                                        <span>1h</span>
                                        <span className='text-danger'>−0.01%</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column ml-4 it-char-flex-other">
                                    <div className='it-char'>
                                        <span>Bid</span>
                                        <span className='text-success'>0.023159</span>
                                    </div>
                                    <div className='it-char'>
                                        <span>Bid</span>
                                        <span className='text-danger'>0.023194</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column ml-4 it-char-flex-other">
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
                            <Card className='mt-2 it-trading_view'>
                                <CardBody>
                                    <TradingViewWidget
                                        symbol="BITFINEX:BTCUSD"
                                        autosize
                                        locale="ru"
                                        theme={theme.main_chart}
                                    />
                                </CardBody>
                            </Card>
                        </div>
                        <div className='mt-4 buy-sell'>
                            <Card>
                                <CardBody>
                                    <div className='text-center'>
                                        <img src={theme.nav_wallet} className='it-icon non_op'/>
                                        <span className='it-fs16 ml-2 align-middle it-medium'>40.00600209 XMR</span>
                                        <p className='it-fs14'>
                                            Total 1000.90 USD
                                            <hr className="it-hr-text" data-content="DEMO"/>
                                        </p>
                                    </div>
                                    <div className='text-center mt-2 w-100'>
                                        <div className="btn-group d-flex btn-buy-sell" role="group">
                                            <Button className='bg-success border-0'>
                                                <img src={require('../assets/icons/raw_up.svg')} />
                                                <strong>Buy</strong>
                                            </Button>
                                            <Button className='bg-white text-dark border border-left-0'>
                                                <img src={require('../assets/icons/raw_down.svg')} />
                                                <strong className='it-half-opacity'>Sell</strong>
                                            </Button>
                                        </div>
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
                                    <div className="d-flex flex-row mt-1">
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
                                    <div className="d-flex flex-row mt-1">
                                        <span className='text-primary mr-2'>2%</span>
                                        <span className='text-primary mr-2'>5%</span>
                                        <span className='text-primary mr-2'>10%</span>
                                        <span className='text-secondary ml-4'>23%</span>
                                    </div>
                                    <Button className='bg-success mt-2 border-0 py-2' block>
                                        <img src={require('../assets/icons/raw_up.svg')} style={{height: 17}} className='mb-1'/>
                                        <strong className='ml-2'>Buy Monero</strong>
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <Row className='mt-4'>
                        <Col className='col-12' md={12} lg={8} xl={8}>
                            <Card className='order-book-card'>
                                <CardBody className='ml-4'>
                                    <Row>
                                        <Col>
                                            <div className="d-flex flex-row">
                                                <strong className='it-fs18 mr-4'>Order Book</strong>
                                                <div className='it-gr-btn'>
                                                    <div>
                                                        Graph
                                                    </div>
                                                    <div className='active'>
                                                        Table
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-row-reverse pr-2">
                                                <ReactSVG
                                                    path={require('../assets/icons/share.svg')}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='mt-4 text-right it-order-book'>
                                        <Col className='tb-1 col-6'>
                                            <Table className='order-book-table'>
                                                <thead>
                                                <tr>
                                                    <th>Sum BTC</th>
                                                    <th>Total XMR</th>
                                                    <th>Size BTC</th>
                                                    <th>Bid</th>
                                                    <th/>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    [1,2,3,4,5,6,7,8,9].map((item) => (
                                                        <tr key={item}>
                                                            <td>0.00017239</td>
                                                            <td>0.00017239</td>
                                                            <td>0.00017239</td>
                                                            <td className='text-success'>0.00017239</td>
                                                            <td className='icon'>
                                                                <div className='bg-success'>
                                                                    <img src={require('../assets/icons/raw_up.svg')} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col className='tb-2 col-6'>
                                            <Table className='order-book-table reverse'>
                                                <thead>
                                                <tr>
                                                    <th/>
                                                    <th>Ask</th>
                                                    <th>Total BTC</th>
                                                    <th>Size XMR</th>
                                                    <th>Sum BTC</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    [1,2,3,4,5,6,7,8,9].map((item) => (
                                                        <tr key={item}>
                                                            <td className='icon'>
                                                                <div className='bg-danger'>
                                                                    <ReactSVG
                                                                        path={require('../assets/icons/raw_down.svg')}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className='text-danger'>0.00017239</td>
                                                            <td>0.00017239</td>
                                                            <td>0.00017239</td>
                                                            <td>0.00017239</td>
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={12} lg={4} xl={4} className='col-12 market'>
                            <Card>
                                <CardBody className='ml-4'>
                                    <Row>
                                        <Col className='it-fs18'>
                                            <strong>Market history</strong>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-row-reverse pr-2">
                                                <ReactSVG
                                                    path={require('../assets/icons/share.svg')}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='mt-4'>
                                        <Col className='it-fs12 pr-4'>

                                            <Table className='market-history-table'>
                                                <thead>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Type</th>
                                                    <th>Price</th>
                                                    <th>Amount</th>
                                                    <th>Total cost</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    [1,2,3,4,5,6,7,8,9].map((item) => (
                                                        <tr key={item}>
                                                            <td>15:19</td>
                                                            <td className='text-success'>Buy</td>
                                                            <td>0.02315000</td>
                                                            <td>1.05022332</td>
                                                            <td>1.05022332</td>
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col className='it-fs12 pr-4 it-market-history-extra-col'>
                                            <Table className='market-history-table'>
                                                <thead>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Type</th>
                                                    <th>Price</th>
                                                    <th>Amount</th>
                                                    <th>Total cost</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    [1,2,3,4,5,6,7,8,9].map((item) => (
                                                        <tr key={item}>
                                                            <td>15:19</td>
                                                            <td className='text-success'>Buy</td>
                                                            <td>0.02315000</td>
                                                            <td>1.05022332</td>
                                                            <td>1.05022332</td>
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </BasePage>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trading);