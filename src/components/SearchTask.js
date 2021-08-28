import React from 'react';
import { Form } from 'react-bootstrap';

function SearchTask() {
    return (
        <Form.Control
            type="text"
            className="mb-2"
            placeholder="Buscar tarea..."
            size="lg">
        </Form.Control>
    );
}

export { SearchTask }