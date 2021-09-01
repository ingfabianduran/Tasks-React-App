import React from 'react';
import { Form } from 'react-bootstrap';

function SearchTask({search, setSearch}) {
    const searchItem = (e) => {
        const NEW_VALUE = e.target.value;
        setSearch(NEW_VALUE);
    };

    return (
        <Form.Control
            type="text"
            className="mb-2"
            placeholder="Buscar tarea..."
            size="lg"
            value={search}
            onChange={searchItem}>
        </Form.Control>
    );
}

export { SearchTask }