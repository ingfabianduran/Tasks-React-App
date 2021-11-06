import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { showAlert } from './Alert';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../css/FormTask.css';

function FormTask({ tasks, setTasks, setIsLoading }) {
  const formik = useFormik({
      initialValues: {
        tipoCaso: '',
        descripcionCaso: ''
      },
      validationSchema: yup.object({
        tipoCaso: yup.string().required('El tipo caso es obligatorio'),
        descripcionCaso: yup.string().required('La descripcion del caso es obligatorio')
      }),
      onSubmit: (formData) => {
        const TASKS = [...tasks];
        const LAST_TASK_ID = TASKS[TASKS.length - 1].id + 1;
        const DATA_TASKS = {
          id: LAST_TASK_ID,
          type: formData.tipoCaso,
          description: formData.descripcionCaso,
          state: true
        };
        TASKS.push(DATA_TASKS);
        showAlert('Tarea Agregada Correctamente');
        setTasks(TASKS);
        setIsLoading(true);
        localStorage.setItem('tasks', JSON.stringify(TASKS));
      }
  });

  return (
      <Card className="mt-4 border-0 shadow">
        <Card.Body>
          <Card.Title>Nuevo Caso</Card.Title>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Select name="tipoCaso" onChange={formik.handleChange} isInvalid={formik.errors.tipoCaso}>
                        <option value="">Seleccioné un tipo de caso</option>
                        <option value="Incidente">Incidente</option>
                        <option value="Requerimiento">Requerimiento</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      { formik.errors.tipoCaso }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control
                        name="descripcionCaso"
                        as="textarea"
                        placeholder="Escriba una breve descripción"
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.descripcionCaso}>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      { formik.errors.descripcionCaso }
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex justify-content-around">
                    <Button type="submit" variant="primary" size="lg">Registrar</Button>
                    <Button type="button" variant="secondary" size="lg">Cancelar</Button>
                </div>
            </Form>
        </Card.Body>
      </Card>
  );
}

export { FormTask }