import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './MyProduct.css'
import { AuthContext } from '../../context/AuthProvider';
import SingleProductCard from '../CategoryDetails/SingleProductCard/SingleProductCard';

const MyProduct = () => {
    const [producyByCategoryData, setProducyByCategoryData] = useState([])
    const { user } = useContext(AuthContext);


    useEffect(() => {
        document.title = "My Products Page Sristi Mart"
    }, [])

    useEffect(() => {
        if (user) {
            fetch(`https://sristi-mart-server.vercel.app/products/seller/${user?.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    setProducyByCategoryData(data)
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }, [user])

    return (
        <div className='service-details'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h3 className='section-title'>My Products</h3>
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

export default MyProduct;