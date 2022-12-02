import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './CategoryDetails.css'
import { AuthContext } from '../../context/AuthProvider';
import SingleProductCard from './SingleProductCard/SingleProductCard';

const CategoryDetails = () => {
    const producyByCategoryData = useLoaderData()
    const { user } = useContext(AuthContext);

    let { id } = useParams();

    useEffect(() => {
        document.title = "Product Details Page Sristi Mart"
    }, [])


    return (
        <div className='service-details'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h3 className='section-title'>Service Details</h3>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {producyByCategoryData && producyByCategoryData?.length > 0 &&
                        producyByCategoryData?.map((product, index) =>
                        (
                            <SingleProductCard key={index} product={product} />
                        )
                        )}
                </Row>
            </div>
        </div>
    );
};

export default CategoryDetails;