import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { SpinnerRoundOutlined } from 'spinners-react';
import { SearchTask } from './SearchTask';
import { ListPagination } from './ListPagination';
import { DataUser } from '../context/Context';
import { showItemsForPage, generateDataReport } from '../data/data';
import { showAlert } from './Alert';
import '../css/ListTasks.css';

function ListTasks({tasks, setTasks, setReport, isLoadingApp}) {
    const [search, setSearch] = React.useState('');
    const [itemsForPages, setItemsForPage] = React.useState(showItemsForPage(tasks));
    const [active, setActive] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false);
    const { user } = React.useContext(DataUser);
    
    let pages = tasks.length / 6;
    let searchTasks = [];

    if (search.length === 0) {
        searchTasks = itemsForPages;
    } else {
        searchTasks = tasks.filter(task => {
            const textTask = task.description.toLowerCase();
            const inputText = search.toLowerCase();
            return textTask.includes(inputText);
        });
        pages = searchTasks.length / 6;
    }

    const saveStateTasks = (newStateTasks) => {
        localStorage.setItem('tasks', JSON.stringify(newStateTasks));
        setTasks(newStateTasks);
    };

    const updateTask = (id) => {
        const INDEX_TASK = tasks.findIndex(item => {
            return item.id === id;
        });
        const NEW_TASKS = [...tasks];
        NEW_TASKS[INDEX_TASK].state = true;
        saveStateTasks(NEW_TASKS);
        setReport([generateDataReport(tasks, 'Requerimiento'), generateDataReport(tasks, 'Incidente')]);
        showAlert('Tarea actualizada');
    };
      
    const deleteTask = (id) => {
        const INDEX_TASK = tasks.findIndex(item => {
          return item.id === id;
        });
        const NEW_TASKS = [...tasks];
        NEW_TASKS.splice(INDEX_TASK, 1);
        saveStateTasks(NEW_TASKS);
        setItemsForPage(showItemsForPage(NEW_TASKS));
        setReport([generateDataReport(NEW_TASKS, 'Requerimiento'), generateDataReport(NEW_TASKS, 'Incidente')]);
        pages = tasks.length / 6;
        isLoadingApp(true);
        showAlert('Tarea eliminada');
    };

    const changePage = (e) => {
        setIsLoading(true);
        const PAGE_SELECTED = parseInt(e.target.innerText);
        const START = (6 * PAGE_SELECTED) - 6;
        const END = (6 * PAGE_SELECTED);
        setTimeout(() => {
            setItemsForPage(showItemsForPage(tasks, START, END));
            setIsLoading(false);
        }, 2000);
        setActive(PAGE_SELECTED);
    };
    
    return (
        <Card className="border-0 shadow">
            <Card.Body>
                <SearchTask
                    search={search}
                    setSearch={setSearch} />
                <div className="d-flex justify-content-center my-2">
                    <SpinnerRoundOutlined enabled={isLoading} size={50} thickness={100} speed={80} color="#8AAE92"/>
                </div>
                <h6 className="text-center">Tareas de { user.name }</h6>
                <ListGroup>
                    { searchTasks.map(item => (
                        <ListGroup.Item className="d-flex align-items-center justify-content-between" key={item.id}>
                            <div className="d-flex">
                                <Button
                                    variant={item.state ? 'success' : 'danger'} 
                                    type="button"
                                    className="me-2"
                                    size="sm"
                                    disabled={item.state ? true : false}
                                    onClick={() => updateTask(item.id)} >
                                    ✓
                                </Button>
                                { item.description } - <span className="text-muted fst-italic">{ item.type }</span>
                            </div>
                            <div>
                                <Button onClick={() => deleteTask(item.id)} variant="secondary" disabled={isLoading}>Delete</Button>
                            </div>
                        </ListGroup.Item>
                    )) }
                </ListGroup>
                <ListPagination 
                    pages={pages}
                    active={active}
                    changePage={changePage} />
            </Card.Body>
        </Card>
    );
}

export { ListTasks }