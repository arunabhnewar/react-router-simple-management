import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Employee.css'

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [displayEmployees, setDisplayEmployees] = useState([]);

    const searchHandle = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const matchedEmployee = employees.filter(employee => employee.name.toLowerCase().includes(searchValue));
        setDisplayEmployees(matchedEmployee);
    }
    useEffect(() => {
        fetch('/employeeData.json')
            .then(res => res.json())
            .then(data => {
                setEmployees(data)
                setDisplayEmployees(data)
            })
    }, [])
    return (
        <div className="employee-container">
            <Container className="pt-5 pb-3">
                <Form className="d-flex w-50 mx-auto mb-3">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={searchHandle}
                    />

                </Form>
                <h4> Search Result: {displayEmployees.length}</h4>
                <Table responsive="sm" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Table heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayEmployees.map(employee => (
                                <tr>
                                    <td>{employee?.id}</td>
                                    <td>Image</td>
                                    <td>{employee?.name}</td>
                                    <td>{employee?.designation}</td>
                                    <td>
                                        <NavLink
                                            to={`/employee/${employee?.id}`}
                                            className="text-decoration-none"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "orange"
                                            }}>
                                            Details
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Employee;