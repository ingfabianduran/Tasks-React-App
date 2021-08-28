import React  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReportTask } from './components/ReportTasks';
import { FormTask } from './components/FormTask';
import { ListTasks } from './components/ListTasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Row className="app align-items-center">
          <Col md="7">
            <ReportTask />
            <FormTask />
          </Col>
          <Col md="5">
            <ListTasks />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
