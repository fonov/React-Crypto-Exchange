import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Card, CardBody, Row, Col, Button,
    FormGroup, Label, Input, Table,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import {push} from "react-router-redux";
import ReactSVG from 'react-svg';
import {set_order_close_modal} from "../../actions/menu";
import {baseWrapper} from "../../actions/eventWrapper";
import FontAwesome from 'react-fontawesome'
import OrderBookTable from './orderBook/table'


class Trading extends Component{

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            active_index: -1,
            active_index_1: -1,
            order_book: 2,
            dropdownOpen: false
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                active_index: Math.floor(Math.random() * 9),
                active_index_1: Math.floor(Math.random() * 9)
            });
            setTimeout(() => {
                this.setState({
                    active_index: -1,
                    active_index_1: -1
                });
            }, 300)
        }, 1000)
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {

        const {
                theme, set_order_close_modal,
                baseWrapper
        } = this.props,
            {
                active_index, active_index_1, order_book
            } = this.state;

        return(
            <div className='it-page it-page-trading'>
                <div className='it-trading'>
                    <div className='d-flex flex-row mb-2'>
                        <div className='mt-3 main-view'>
                            <div className="d-flex flex-row">
                                <div className='it-title'>
                                    XMR/BTC
                                </div>
                                <Row className='info_row'>
                                    <Col sm={3} md={3} lg={5} xl={5} className='align-self-center'>
                                        <Row className='justify-content-around'>
                                            <Col sm={12} md={12} lg={5} xl={5}>
                                                <Row>
                                                    <Col sm={4} md={3} className='align-self-center'>Price</Col>
                                                    <Col sm={8} md={9} className='align-self-center text-success'>0.023206</Col>
                                                </Row>
                                            </Col>
                                            <Col sm={12} md={12} lg={5} xl={5}>
                                                <Row>
                                                    <Col sm={4} md={3} className='align-self-center'>Vol</Col>
                                                    <Col sm={8} md={9} className='align-self-center'>8,48048</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={2} md={2} lg={2} xl={2} className='align-self-center'>
                                        <Row>
                                            <Col sm={12} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col sm={3} className='align-self-center'>24h</Col>
                                                    <Col sm={9} className='text-success align-self-center'>+6.29%</Col>
                                                </Row>
                                            </Col>
                                            <Col sm={12} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col sm={3} className='align-self-center'>1h</Col>
                                                    <Col sm={9} className='text-danger align-self-center'>−0.01%</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={2} md={2} lg={2} xl={2} className='align-self-center'>
                                        <Row>
                                            <Col sm={12} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col sm={3} className='align-self-center'>Bid</Col>
                                                    <Col sm={9} className='text-success align-self-center'>0.023159</Col>
                                                </Row>
                                            </Col>
                                            <Col sm={12} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col sm={3} className='align-self-center'>Ask</Col>
                                                    <Col sm={9} className='text-danger align-self-center'>0.023194</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={2} md={3} lg={3} xl={3} className='align-self-center'>
                                        <Row>
                                            <Col sm={12} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col sm={7} md={6} lg={5} className='align-self-center'>24H high</Col>
                                                    <Col sm={5} md={6} lg={7} className='align-self-center'>0.024957</Col>
                                                </Row>
                                            </Col>
                                            <Col sm={12} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col sm={7} md={6} lg={5} className='align-self-center'>24H low</Col>
                                                    <Col sm={5} md={6} lg={7} className='align-self-center'>0.023100</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <Card className='mt-2 it-trading_view'>
                                <CardBody>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='mt-4 buy-sell'>
                            <Card>
                                <CardBody>
                                    <div className='text-center wallet-count-block'>
                                        <img src={theme.nav_wallet} className='it-icon non_op'/>
                                        <span className='it-fs16 ml-2 align-middle it-medium wallet-count'>40.00600209 XMR</span>
                                        <p className='it-fs12'>
                                            Total 1000.90 USD
                                            <hr className="it-hr-text" data-content="DEMO"/>
                                        </p>
                                    </div>
                                    <div className='text-center mt-4 w-100 pt-1 mb-1'>
                                        <div className="btn-group d-flex btn-buy-sell" role="group">
                                            <Button
                                                className='border-0'
                                                onClick={() => baseWrapper(() => null)}
                                                color='success'
                                            >
                                                <img src={require('../../assets/icons/raw_up.svg')} />
                                                <span className='it-fw6'>Buy</span>
                                            </Button>
                                            <Button
                                                className='bg-white text-dark border border-left-0'
                                                onClick={() => baseWrapper(() => null)}
                                            >
                                                <div className='d-flex justify-content-center'>
                                                    <ReactSVG
                                                        path={require('../../assets/icons/raw_down.svg')}
                                                        className='mr-1'
                                                        color='light'
                                                    />
                                                    <span className='it-half-opacity it-fw6'>Sell</span>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                    <Label className='mt-3'>Order type</Label>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className='mb-3'>
                                        <DropdownToggle color='light' className='w-100 order-dropdown'>
                                            <div className='d-flex justify-content-between'>
                                                <div>Order type</div>
                                                <FontAwesome name='caret-down'/>
                                            </div>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem disabled>
                                                <FontAwesome name='check' className='dropdown-check'/> Action
                                            </DropdownItem>
                                            {
                                                [
                                                    'Limit',
                                                    'Market',
                                                    'Stop',
                                                    'Stop-Limit',
                                                    'Trailing stop',
                                                    'Fill or Kill'
                                                ].map((item, i) => (
                                                    <DropdownItem key={i}>
                                                        {item}
                                                    </DropdownItem>
                                                ))
                                            }
                                        </DropdownMenu>
                                    </Dropdown>
                                    <Label for="total" className='mt1'>Price</Label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" value='0.023194'/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">BTC</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mt-1 it-pointer">
                                        <span className='text-primary mr-2'>Bid</span>
                                        <span className='text-primary mr-2'>Ask</span>
                                    </div>
                                    <Label for="total" className='label-amount'>Amount</Label>
                                    <div className="input-group mb-1">
                                        <input type="text" className="form-control" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">XMR</span>
                                        </div>
                                    </div>
                                    <Label for="total" className='mt-3'>Total</Label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">BTC</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mt-1 it-pointer">
                                        <span className='text-primary mr-2'>2%</span>
                                        <span className='text-primary mr-2'>5%</span>
                                        <span className='text-primary mr-2'>10%</span>
                                        <span className='text-secondary ml-4'>23%</span>
                                    </div>
                                    <Button
                                        className='bg-success mb-3 border-0 py-2 btn-buy'
                                        block
                                        onClick={() => baseWrapper(() => null)}
                                    >
                                        <img src={require('../../assets/icons/raw_up.svg')} style={{height: 17}} className='mb-1'/>
                                        <span className='ml-2 it-fw6'>Buy Monero</span>
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <Row className='button-cards'>
                        <Col className='col-12' md={12} lg={8} xl={8}>
                            <Card className='order-book-card'>
                                <CardBody>
                                    <div className='d-flex justify-content-between mt-2'>
                                        <div>
                                            <div className="d-flex flex-row">
                                                <strong className='it-fs18 mr-2'>Order Book</strong>
                                                <div className="d-flex flex-row it-btn-group ml-2 two mr-2">
                                                    <div
                                                        className={`it-btn ${order_book === 1 ? 'active' : ''}`}
                                                        onClick={() => this.setState({order_book: 1})}
                                                    >
                                                        <span>Graph</span>
                                                    </div>
                                                    <div
                                                        className={`it-btn ${order_book === 2 ? 'active' : ''}`}
                                                        onClick={() => this.setState({order_book: 2})}
                                                    >
                                                        <span>Table</span>
                                                    </div>
                                                </div>
                                                {
                                                    order_book === 1 ? [
                                                        <div className='price_range'>
                                                            <span className='ml-4 mr-1 it-fs12'>Price range</span>
                                                        </div>,
                                                        <div className="d-flex flex-row it-btn-group ml-2 four">
                                                            <div className='it-btn active'><span>25%</span></div>
                                                            <div className='it-btn'><span>50%</span></div>
                                                            <div className='it-btn'><span>75%</span></div>
                                                            <div className='it-btn'><span>100%</span></div>
                                                        </div>
                                                    ] : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {order_book ? (<OrderBookTable active_index={active_index} active_index_1={active_index_1}/>) : null}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={12} lg={4} xl={4} className='col-12 market'>
                            <Card>
                                <CardBody>
                                    <strong className='market-title it-fs18'>Market history</strong>
                                    <div>
                                        <Row className='it-market-history-row justify-content-center'>
                                            <Col className='it-fs12' sm={6} md={6} lg={12} xl={12}>
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
                                                            <tr key={item} onClick={() => set_order_close_modal(true)} className='it-pointer'>
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
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
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
    return {
        push: url => dispatch(push(url)),
        set_order_close_modal: modal => dispatch(set_order_close_modal(modal)),
        baseWrapper: event => dispatch(baseWrapper(event))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trading);