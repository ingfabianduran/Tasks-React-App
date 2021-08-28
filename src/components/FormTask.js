import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../css/FormTask.css';

function FormTask() {
    return (
        <Card className="mt-4 border-0 shadow">
            <Card.Body>
                <Card.Title>Nuevo Caso</Card.Title>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Tipo:</Form.Label>
                        <Form.Select>
                            <option>Seleccioné un tipo de caso</option>
                            <option value="Incidente">Incidente</option>
                            <option value="Requerimiento">Requerimiento</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Escriba una breve descripción">
                        </Form.Control>
                    </Form.Group>
                    <div className="d-flex justify-content-around">
                        <Button className="button--primary" size="lg">Registrar</Button>
                        <Button className="button--secondary" size="lg">Cancelar</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export { FormTask }