import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText, Badge, Button, ListGroup, ListGroupItem, Input, FormGroup, Label,
    Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import { AreaChart, Area, Cell, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';


class MarketList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            tile: false
        }
    }

    changeView() {
        this.setState({tile: !this.state.tile})
    }

    render() {

        const {push, theme} = this.props,
            {tile} = this.state,
            data = [
                {uv: 4000, pv: 2400, amt: 2400},
                {uv: 3000, pv: 1398, amt: 2210},
                {uv: 2000, pv: 9800, amt: 2290},
                {uv: 2780, pv: 3908, amt: 2000},
                {uv: 1890, pv: 4800, amt: 2181},
                {uv: 2390, pv: 3800, amt: 2500},
                {uv: 3490, pv: 4300, amt: 2100},
                {uv: 4000, pv: 2400, amt: 2400},
                {uv: 3000, pv: 1398, amt: 2210},
                {uv: 2000, pv: 9800, amt: 2290},
                {uv: 2780, pv: 3908, amt: 2000},
                {uv: 1890, pv: 4800, amt: 2181},
                {uv: 2390, pv: 3800, amt: 2500},
                {uv: 3490, pv: 4300, amt: 2100},
                {uv: 4000, pv: 2400, amt: 2400},
                {uv: 3000, pv: 1398, amt: 2210},
                {uv: 2000, pv: 9800, amt: 2290},
                {uv: 2780, pv: 3908, amt: 2000},
                {uv: 1890, pv: 4800, amt: 2181},
                {uv: 2390, pv: 3800, amt: 2500},
                {uv: 3490, pv: 4300, amt: 2100},
            ];

        const base_chart = () => (
            <AreaChart width={390} height={145} data={data} margin={{top: 15, right: 0, bottom: 20, left: 0}}>
                <Area type='monotone' dataKey='uv' strokeWidth={4} stroke={theme.trader_chart_stroke} fill={theme.trader_chart_fill} />
            </AreaChart>
        );

        return (
            <BasePage
                active={[false, false, false]}
            >
                <div className='it-market-list'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>Markets</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times' onClick={() => push(URLS.Trading)}>
                                <FontAwesome name='times'/>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-flex justify-content-between top-nav'>
                        <div className='d-flex flex-row'>
                            <div className='item'>
                                <strong className='it-fs18 it_light_opacity'>All</strong>
                                <span className='it-fs18 it-half-opacity ml-2'>10</span>
                            </div>
                            <div className='item'>
                                <img src='https://chain.so/Bitcoin@2x.png' />
                                <strong className='it-fs18 it_light_opacity'>Bitcoin BTC</strong>
                                <span className='it-fs18 it-half-opacity ml-2'>10</span>
                                <div className='active' />
                            </div>
                            <div className='item'>
                                <img src='https://avatars1.githubusercontent.com/u/7450663?v=3' />
                                <strong className='it-fs18 it_light_opacity'>Ethereum ETH</strong>
                                <span className='it-fs18 it-half-opacity ml-2'>10</span>
                            </div>
                        </div>
                        <div className='d-flex flex-row'>
                            <div className="input-group search mr-2">
                                <input type="text" className="form-control border-right-0" placeholder='Search'/>
                                <div className="input-group-append">
                                    <span className="input-group-text border-left-0">
                                        <FontAwesome name='search' />
                                    </span>
                                </div>
                            </div>
                            <div className={`ml-4 type_icon mr-4 ${tile ? 'non_active' : ''}`} onClick={this.changeView.bind(this)}>
                                <img src={theme.colomn} />
                            </div>
                            <div className={`type_icon ${!tile ? 'non_active' : ''} mr-2`} onClick={this.changeView.bind(this)}>
                                <img src={theme.tile} />
                            </div>
                        </div>
                    </div>
                    {
                        tile ? (
                            <div className='tile-block'>
                                <Row>
                                    <Col className='col-4'>
                                        <Card>
                                            <CardBody>
                                                <div className='d-flex justify-content-between'>
                                                    <strong className='it-fs24'>LTC/BTC</strong>
                                                    <div className='it-medium it-fs16'>
                                                        <Badge color='success' pill>+24.7%</Badge>
                                                    </div>
                                                </div>
                                                <span className='text-success it-fs16 it-medium'><FontAwesome name='sort-asc'/> 0.01810002</span>
                                                {base_chart()}
                                                <div className='d-flex justify-content-around'>
                                                    <div className='text-center'>
                                                        <span className='it-fs12 it-half-opacity'>Bid</span>
                                                        <div>
                                                            <span className='it-fs18'>0.01799996</span>
                                                        </div>
                                                    </div>
                                                    <div className='text-center border-left border-right px-4 mx-2'>
                                                        <span className='it-fs12 it-half-opacity'>Spread</span>
                                                        <div>
                                                            <span className='it-fs18'>0.01799996</span>
                                                        </div>
                                                    </div>
                                                    <div className='text-center'>
                                                        <span className='it-fs12 it-half-opacity'>Ask</span>
                                                        <div>
                                                            <span className='it-fs18'>0.01799996</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col className='col-4'>
                                        <Card>
                                            <CardBody>
                                                <div className='d-flex justify-content-between'>
                                                    <strong className='it-fs24'>LTC/BTC</strong>
                                                    <div className='it-medium it-fs16'>
                                                        <Badge color='success' pill>+24.7%</Badge>
                                                    </div>
                                                </div>
                                                <span className='text-success it-fs16 it-medium'><FontAwesome name='sort-asc'/> 0.01810002</span>
                                                {base_chart()}
                                                <div className='d-flex justify-content-around'>
                                                    <div className='text-center'>
                                                        <span className='it-fs12 it-half-opacity'>Bid</span>
                                                        <div>
                                                            <span className='it-fs18'>0.01799996</span>
                                                        </div>
                                                    </div>
                                                    <div className='text-center border-left border-right px-4 mx-2'>
                                                        <span className='it-fs12 it-half-opacity'>Spread</span>
                                                        <div>
                                                            <span className='it-fs18'>0.01799996</span>
                                                        </div>
                                                    </div>
                                                    <div className='text-center'>
                                                        <span className='it-fs12 it-half-opacity'>Ask</span>
                                                        <div>
                                                            <span className='it-fs18'>0.01799996</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col className='col-4'>
                                        <Card>
                                            <CardBody>
                                                <div className='d-flex justify-content-between'>
                                                    <strong className='it-fs24'>LTC/BTC</strong>
                                                    <div className='it-medium it-fs16'>
                                                        <Badge color='danger' pill>+24.7%</Badge>
                                                    </div>
                                                </div>
                                                <span className='text-danger it-fs16 it-medium'><FontAwesome name='sort-asc'/> 0.01810002</span>
                                                {base_chart()}
                                                <div className='d-flex justify-content-around'>
                                                    <div className='text-center'>
                                                        <span className='it-fs12 it-half-opacity'>Bid</span>
                                                        <div>
                                                            <span className='it-fs18'>0.01799996</span>
                                                        </div>
                                                    </div>
                                                    <div className='text-center border-left border-right px-4 mx-2'>
                                                        <span className='it-fs12 it-half-opacity'>Spread</span>
                                                        <div>
                                                            <span className='it-fs18'>0.01799996</span>
                                                        </div>
                                                    </div>
                                                    <div className='text-center'>
                                                        <span className='it-fs12 it-half-opacity'>Ask</span>
                                                        <div>
                                                            <span className='it-fs18'>0.01799996</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        ) : (
                            <Table className='border-bottom table-night'>
                                <thead>
                                <tr>
                                    <th><span className='it-dashed'>Coin</span></th>
                                    <th>Pair</th>
                                    <th><span className='it-dashed'>Last price</span></th>
                                    <th><span className='it-dashed'>High</span></th>
                                    <th><span className='it-dashed'>Low</span></th>
                                    <th><span className='it-dashed text-primary border-primary'>Volume</span> <FontAwesome name='sort-desc'/></th>
                                    <th><span className='it-dashed'>% 1h</span></th>
                                    <th><span className='it-dashed'>% 1d</span></th>
                                    <th><span className='it-dashed'>% 1w</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    [1,2,3,4,5,6,7,8].map(item => (
                                        <tr key={item}>
                                            <td className='with_img'>
                                                <img src='https://chain.so/Bitcoin@2x.png' />
                                                <strong className='it-fs16 ml-3'>Litecoin</strong>
                                            </td>
                                            <td>
                                                <strong className='it-fs16 text-primary'>LTC/BTC</strong>
                                            </td>
                                            <td>
                                                <span className='text-success it-fs16 it-medium'><FontAwesome name='sort-asc'/> 0.01810002</span>
                                            </td>
                                            <td>
                                                <span className='it-fs16'>0.01810002</span>
                                            </td>
                                            <td>
                                                <span className='it-fs16'>0.01810002</span>
                                            </td>
                                            <td>
                                                <span className='it-fs16'>0.01810002</span>
                                            </td>
                                            <td>
                                                <span className='text-success it-fs16 it-medium'>+ 23%</span>
                                            </td>
                                            <td>
                                                <span className='text-success it-fs16 it-medium'>+ 23%</span>
                                            </td>
                                            <td>
                                                <span className='text-danger it-fs16 it-medium'>- 23%</span>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </Table>
                        )
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(MarketList);