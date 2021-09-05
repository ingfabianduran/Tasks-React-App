import React  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReportTask } from './components/ReportTasks';
import { FormTask } from './components/FormTask';
import { ListTasks } from './components/ListTasks';
import { generateData, generateDataReport } from './data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
  const [tasks, setTasks] = React.useState(generateData(30));
  const [report, setReport] = React.useState([generateDataReport(tasks, 'Requerimiento'), generateDataReport(tasks, 'Incidente')]);

  return (
    <React.Fragment>
      <Container>
        <Row className="app align-items-center">
          <Col md="7">
            <ReportTask 
              typesTasks={report}/>
            <FormTask />
          </Col>
          <Col md="5">
            <ListTasks
              tasks={tasks} 
              setTasks={setTasks}
              setReport={setReport} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
