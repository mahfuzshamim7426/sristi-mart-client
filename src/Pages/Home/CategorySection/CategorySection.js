import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './CategorySection.css'
import { Link } from 'react-router-dom';

const CategorySection = ({ allCategories }) => {
    return (
        <div className="category-section">
            <div className='container'>
                <div>
                    <h2 className='section-title  text-center fs-3 mb-5'>Services</h2>
                    <Row xs={1} md={3} className="g-4">
                        {allCategories && allCategories?.length > 0 &&
                            allCategories?.map((category, index) => (
                                <Col key={index}>
                                    <Link className='nav-link' to={`/category/${category?._id}`}>
                                        <Card className='p-5 category-card'>
                                            <Card.Title className='section-subtitle text-center header'>{category?.name}</Card.Title>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                    </Row>
                </div>
            </div>
        </div>
    );

};

export default CategorySection;