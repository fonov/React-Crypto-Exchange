import React, { Component } from 'react';
import {
    Card, CardBody, Row, Col, Button,
    FormGroup, Label, Input, Table,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import ReactSVG from 'react-svg';


const table = (props) => {

    const {active_index, active_index_1} = props;

    return (
        <Row className='mt-4 text-right it-order-book'>
            <Col className='tb-1' sm={6}>
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
                            <tr key={item} className={`${active_index === item ? 'active' : ''} it-pointer`}>
                                <td>0.00017239</td>
                                <td>0.00017239</td>
                                <td>0.00017239</td>
                                <td className='text-success'>0.00017239</td>
                                <td className='icon'>
                                    <div className='bg-success'>
                                        <img src={require('../../../assets/icons/raw_up.svg')} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Col>
            <Col className='tb-2' sm={6}>
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
                            <tr key={item} className={`${active_index_1 === item ? 'active' : ''} it-pointer`}>
                                <td className='icon'>
                                    <div className='bg-danger'>
                                        <ReactSVG
                                            path={require('../../../assets/icons/raw_down.svg')}
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
    )
};

export default table