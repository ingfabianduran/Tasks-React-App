import React from 'react';
import { Pagination } from 'react-bootstrap';
import '../css/PaginationTasks.css';

function ListPagination({pages, active, changePage}) {
    let buttonsPages = [];

    for (let i = 0; i < pages; i ++) {
        buttonsPages.push(
            <Pagination.Item 
                key={i} 
                active={active === (i + 1)}
                value={active}
                onClick={changePage}>
                { i + 1 }
            </Pagination.Item>
        );
    }

    return (
        <div className="d-flex justify-content-center">
            <Pagination className="mt-2">
                { buttonsPages }
            </Pagination>
        </div>
    );
}

export { ListPagination }