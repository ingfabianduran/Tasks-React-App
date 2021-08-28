import React from 'react';
import { Accordion, Badge, Container, Row, Col } from 'react-bootstrap';

function ReportTask() {
    const TYPES_TASKS = [
        { id: 1, typeName: 'Incidente', totalCount: 120, countTrue: 60, countFalse: 60 },
        { id: 2, typeName: 'Requerimiento', totalCount: 150, countTrue: 75, countFalse: 75 },
    ];

    return (
        <Accordion defaultActiveKey="0" className="shadow">
            { TYPES_TASKS.map(item => (
                <Accordion.Item key={item.id} eventKey={item.id} className="border-0">
                    <Accordion.Header >
                        { item.typeName }
                    </Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Row>
                                <Col md={4} className="text-center"><h4>Abiertos: <Badge bg="danger">{ item.countTrue }</Badge></h4></Col>
                                <Col md={4} className="text-center"><h4>Cerrados: <Badge bg="success">{ item.countFalse }</Badge></h4></Col>
                                <Col md={4} className="text-center"><h4>Totales: <Badge>{ item.totalCount }</Badge> </h4></Col>
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            )) }
        </Accordion>
    );
}

export { ReportTask };