import React from 'react';
import { Card, ListGroup, Form, Button } from 'react-bootstrap';
import { SearchTask } from './SearchTask';
import { PaginationTasks } from './PaginationTasks';
import { generateData, showItemsForPage } from '../data/data';
import '../css/ListTasks.css';

function ListTasks() {
    const GET_DATA = generateData(30);
    const DATA = showItemsForPage(GET_DATA);
    const NUMBER_PAGES = GET_DATA.length / 6;

    return (
        <Card className="border-0 shadow">
            <Card.Body>
                <SearchTask />
                <ListGroup>
                    { DATA.map(item => (
                        <ListGroup.Item className="d-flex align-items-center justify-content-between" key={item.id}>
                            <div className="d-flex">
                                <Form.Check 
                                    type="checkbox"
                                    className="me-2"
                                    value={item.state}
                                    checked={item.state ? item.state : false}
                                    onChange={e => {}} />
                                { item.description }
                            </div>
                            <div>
                                <Button className="button--secondary">Delete</Button>
                            </div>
                        </ListGroup.Item>
                    )) }
                </ListGroup>
                <div className="d-flex justify-content-center">
                    <PaginationTasks pages={NUMBER_PAGES} />
                </div>
            </Card.Body>
        </Card>
    );
}

export { ListTasks }