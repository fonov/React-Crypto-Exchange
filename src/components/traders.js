import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Card, CardBody, Badge } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import BaseLeftPage from '../elements/BaseLeftPage'
import {ClosePageAction} from '../actions/LeftPage'
import ReactSVG from 'react-svg';


class Traders extends Component{
    render() {

        const {push, ClosePageAction, theme} = this.props;

        return (
            <BaseLeftPage
                BasePageProps={{
                    active: [false, false, false],
                    traders_active: true
                }}
            >
                <div className='it-traders'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>Traders</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className="input-group search">
                                <input type="text" className="form-control border-right-0" placeholder='Search'/>
                                <div className="input-group-append">
                                    <span className="input-group-text border-left-0">
                                        <FontAwesome name='search' />
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times' onClick={() => ClosePageAction(URLS.Trading)}>
                                <ReactSVG
                                    path={require('../assets/icons/close_bg.svg')}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='traders-cards'>
                        {
                            [1,2,3].map(() => [1, 2, 3, 4].map((item) => (
                                <Col key={item} className='col-3 it-pointer' sm={4} md={4} lg={3} xl={3}>
                                    <Card onClick={() => push(URLS.Trader)}>
                                        <CardBody>
                                            <div className='top-100'>
                                                <Badge color='warning' pill>
                                                    <span>top 100</span>
                                                </Badge>
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex flex-row align-items-center'>
                                                    <img src='http://via.placeholder.com/70x70' className='rounded-circle'/>
                                                    <div className='it-ml-10'>
                                                        <div className='d-flex flex-column'>
                                                            <div><strong className='it-fs18'>Jack Bowman</strong></div>
                                                            <div className='it-fs12 it-medium it-half-opacity'>
                                                                <FontAwesome name='map-marker'/> Uzbekistan
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='plus_icon mt-3' onClick={() => push(URLS.Trading)}>
                                                        <img src={theme['plus']} />
                                                    </div>
                                                </div>
                                            </div>
                                            <Row className='mt-4'>
                                                <Col sm={4} md={4}>
                                                    <div className='d-flex flex-column text-center'>
                                                        <div><span className='it-medium text-success it-fs22'>34</span></div>
                                                        <div><span className='it-fs12 it-half-opacity'>trades</span></div>
                                                    </div>
                                                </Col>
                                                <Col sm={4} md={4}>
                                                    <div className='d-flex flex-column text-center'>
                                                        <div className='it-medium text-success it-fs22 text-truncate'>
                                                            343434343434343434343434
                                                        </div>
                                                        <div><span className='it-fs12 it-half-opacity'>trades</span></div>
                                                    </div>
                                                </Col>
                                                <Col sm={4} md={4}>
                                                    <div className='d-flex flex-column text-center'>
                                                        <div><span className='it-medium text-success it-fs22'>34</span></div>
                                                        <div><span className='it-fs12 it-half-opacity'>trades</span></div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                        <div className='risk it-fs14 text-center'>
                                            <span className='it_light_opacity mr-2'>Risk</span>
                                            <span className='it-medium'>3</span>
                                        </div>
                                    </Card>
                                </Col>
                            )))
                        }
                    </Row>
                </div>
            </BaseLeftPage>
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
        ClosePageAction: url => dispatch(ClosePageAction(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Traders);