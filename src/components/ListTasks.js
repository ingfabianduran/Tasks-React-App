import React from 'react';
import { Card, ListGroup, Form, Button } from 'react-bootstrap';
import { SearchTask } from './SearchTask';
import { PaginationTasks } from './PaginationTasks';
import { showItemsForPage } from '../data/data';
import '../css/ListTasks.css';

function ListTasks({tasks, setTasks}) {
    const DATA = showItemsForPage(tasks);
    const NUMBER_PAGES = tasks.length / 6;

    const updateTask = (id) => {
        console.log(`Item ${id} actualizado`);
    };
    const deleteTask = (id) => {
        console.log(`Item ${id} eliminado`);
    };

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
                                    onChange={() => updateTask(item.id)} />
                                { item.description }
                            </div>
                            <div>
                                <Button onClick={() => deleteTask(item.id)} variant="secondary">Delete</Button>
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