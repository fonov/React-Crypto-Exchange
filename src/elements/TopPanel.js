import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Row, Col, Badge } from 'reactstrap';


export default class TopPanel extends Component {

    render() {
        return(
            <div className='it-top-panel'>
                <Row>
                    <Col>
                        <div className="d-flex flex-row">
                            {
                                [
                                    ['ETH/BTC', 'success', '+ 10.4%', '0.049806'],
                                    ['DASH/BTC', 'danger', '- 0.5%', '0.076863'],
                                    ['XMR/BTC', 'success', '+ 2.02%', '0.023360', true]
                                ].map((item, i) => (
                                    <div className={`nav-item ${item[4] === true ? 'active' : ''}`} key={i}>
                                        <div className="d-flex flex-row">
                                            <FontAwesome name='times' className='times it-fs12'/>
                                            <div className="d-flex flex-column ml-2">
                                                <strong className='it-fs16'>{item[0]}</strong>
                                                <div className='d-flex flex-row nav-desc'>
                                                    <p><Badge color={item[1]} pill>{item[2]}</Badge></p>
                                                    <p className='it-fs12'>{item[3]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='nav-item it-fs12 text-primary text-center add'>
                                <div className="d-flex flex-column">
                                    <FontAwesome name='plus-circle' className='it-fs16'/>
                                    <p>Add market</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex flex-row-reverse mr-3'>
                            {
                                [
                                    'sign-out',
                                    'question-circle',
                                    'cog',
                                    'bell'
                                ].map((item, i) => (
                                    <FontAwesome key={i} name={item} className='icon'/>
                                ))
                            }
                            <div className='theme-switch d-flex flex-row'>
                                <div className='text-primary'>
                                    <FontAwesome name='sun-o' />
                                </div>
                                <FontAwesome name='moon-o' className='non_active' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}