import React, {Component} from 'react';
import {
    Row, Col, Progress, Card, CardBody, CardText, Badge,
    Button, ListGroup, ListGroupItem, Input, FormGroup, Label,
    Table
} from 'reactstrap';
import FontAwesome from 'react-fontawesome'


const table = () => {
    return (
        <Table className='border-bottom table-night'>
            <thead>
            <tr>
                <th><span className='it-dashed'>Coin</span></th>
                <th>Pair</th>
                <th><span className='it-dashed'>Last price</span></th>
                <th><span className='it-dashed'>High</span></th>
                <th><span className='it-dashed'>Low</span></th>
                <th><span className='it-dashed text-primary border-primary'>Volume</span> <FontAwesome name='sort-desc caret'/></th>
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
                            <span className='it-fs16 ml-3 it-medium'>Litecoin</span>
                        </td>
                        <td>
                            <span className='it-fs16 text-primary it-medium'>LTC/BTC</span>
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
};

export default table