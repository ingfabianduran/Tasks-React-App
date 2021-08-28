import React from 'react';
import { Pagination } from 'react-bootstrap';
import '../css/PaginationTasks.css';

function PaginationTasks(props) {
    let buttonsPage = [];
    let active = 0;

    for (let i = 0; i < props.pages; i ++) {
        buttonsPage.push(
            <Pagination.Item key={i} active={active === i}>{ i + 1 }</Pagination.Item>
        );
    }

    return (
        <Pagination className="mt-2">
            { buttonsPage }
        </Pagination>
    );
}

export { PaginationTasks }