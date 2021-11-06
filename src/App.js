import React  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReportTask } from './components/ReportTasks';
import { FormTask } from './components/FormTask';
import { ListTasks } from './components/ListTasks';
import { ContextProvider } from './context/Context';
import { SpinnerRoundFilled  } from 'spinners-react';
import { generateData, generateDataReport } from './data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
  const [tasks, setTasks] = React.useState(generateData(30));
  const [report, setReport] = React.useState([generateDataReport(tasks, 'Incidente'), generateDataReport(tasks, 'Requerimiento')]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setReport([generateDataReport(tasks, 'Incidente'), generateDataReport(tasks, 'Requerimiento')]);
    }, 2000);
  }, [isLoading, tasks]);

  return (
    <ContextProvider>
      <React.Fragment>
        <Container>
          { isLoading ?
            <Row className="app align-items-center justify-content-center">
              <SpinnerRoundFilled  enabled={isLoading} size={150} thickness={100} speed={80} color="#F93154"/>
            </Row> :
            <Row className="app align-items-center">
              <Col md="7">
                <ReportTask 
                  typesTasks={report}/>
                <FormTask
                  tasks={tasks}
                  setTasks={setTasks}
                  setIsLoading={setIsLoading} />
              </Col>
              <Col md="5">
                <ListTasks
                  tasks={tasks} 
                  setTasks={setTasks}
                  setReport={setReport}
                  isLoadingApp={setIsLoading} />
              </Col>
            </Row>
          }
        </Container>
      </React.Fragment>
    </ContextProvider>
  );
}

export default App;
