import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText, Badge, Button, ListGroup, ListGroupItem, Input, FormGroup, Label,
    Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";


class MarketList extends Component{
    render() {

        const {push} = this.props;

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
                            <div className='ml-4 icon-fa mr-4'>
                                <FontAwesome name='bars' />
                            </div>
                            <div className='tile non_active'>
                                <img src={require('../assets/icons/tile.svg')} />
                            </div>
                        </div>
                    </div>
                    <Table className='border-bottom'>
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
                </div>
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
        push: url => dispatch(push(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketList);