import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText, Badge } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";


class Traders extends Component{
    render() {

        const {push} = this.props;

        return (
            <BasePage
                active={[false, false, false]}
                traders_active={true}
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
                            <div className='it_cycle_times' onClick={() => push(URLS.Trading)}>
                                <FontAwesome name='times' className=''/>
                            </div>
                        </Col>
                    </Row>
                    {
                        [1,2,3].map(item => (
                            <Row className='traders-cards mt-4' key={item}>
                                {
                                    [
                                        1,
                                        2,
                                        3,
                                        4
                                    ].map((item) => (
                                        <Col key={item} className='col-3' md={3} lg={3} xl={3}>
                                            <Card onClick={() => push(URLS.Trader)}>
                                                <CardBody>
                                                    <div className='top-100'>
                                                        <Badge color='warning' pill>
                                                            <span>top 100</span>
                                                        </Badge>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <div>
                                                            <img src='http://via.placeholder.com/75x75' className='rounded-circle'/>
                                                        </div>
                                                        <div className='mt-3'>
                                                            <div className='d-flex flex-column'>
                                                                <div><strong className='it-fs18'>Jack Bowman</strong></div>
                                                                <div className='it-fs12 it-medium it-half-opacity'>
                                                                    <FontAwesome name='map-marker'/> Uzbekistan
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='plus_icon mt-3' onClick={() => push(URLS.Trading)}>
                                                                <FontAwesome name='plus' className=''/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex justify-content-around mt-4'>
                                                        <div className='d-flex flex-column text-center'>
                                                            <div><span className='it-medium text-success it-fs22'>34</span></div>
                                                            <div><span className='it-fs12 it-half-opacity'>trades</span></div>
                                                        </div>
                                                        <div className='d-flex flex-column text-center'>
                                                            <div><span className='it-medium text-success it-fs22'>34</span></div>
                                                            <div><span className='it-fs12 it-half-opacity'>trades</span></div>
                                                        </div>
                                                        <div className='d-flex flex-column text-center'>
                                                            <div><span className='it-medium text-success it-fs22'>34</span></div>
                                                            <div><span className='it-fs12 it-half-opacity'>trades</span></div>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                                <div className='risk it-fs14 text-center'>
                                                    <span className='it_light_opacity mr-2'>Risk</span>
                                                    <span className='it-medium'>3</span>
                                                </div>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        ))
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Traders);