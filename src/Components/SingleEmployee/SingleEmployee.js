import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleEmployee.css'
import { Card, Col, Container, Row } from 'react-bootstrap';

const SingleEmployee = () => {
    let { id } = useParams();
    const [employeesDetails, setEmployessDetails] = useState([]);
    const [singleEmployee, setSingleEmployee] = useState({});

    useEffect(() => {
        fetch('/employeeDetails.json')
            .then(res => res.json())
            .then(data => setEmployessDetails(data.employee));
    }, []);

    useEffect(() => {
        const foundEmployee = employeesDetails.find((employee) => employee.login.id === id);
        setSingleEmployee(foundEmployee);
    }, [employeesDetails]);
    return (
        <div className="single-employee-container">

            <Container className="py-5">
                <Row>
                    <Col md={5}>
                        <Card>
                            <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />
                        </Card>
                    </Col>
                    <Col md={7}>
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title className="employee-name">{singleEmployee?.name}</Card.Title>
                                <Card.Text>
                                    <p className="employee-info">Gender: {singleEmployee?.gender}</p>
                                    <p className="employee-info">Email: {singleEmployee?.email}</p>
                                    <p className="employee-info">Phone: {singleEmployee?.phone}</p>
                                    <p className="employee-info">City: {singleEmployee?.location?.city}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleEmployee;