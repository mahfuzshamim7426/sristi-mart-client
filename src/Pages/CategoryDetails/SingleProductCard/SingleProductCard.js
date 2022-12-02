import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoVerified } from 'react-icons/go';
import { VscUnverified } from 'react-icons/vsc';

const SingleProductCard = ({ product }) => {
    const datePre = new Date(product?.date);
    const [userData, setUserData] = useState({})

    console.log('userData', userData)

    const formatDate = new Intl.DateTimeFormat(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            hour12: true,
            minute: "2-digit",
            timeZone: "America/New_York",
        }
    ).format(datePre)


    // useEffect(() => {
    //     if (product?._id) {
    //         fetch(`http://localhost:5000/products/category/${product?.seller}`, {
    //             method: 'GET',
    //             headers: {
    //                 'content-type': 'application/json',
    //             },
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                 setUserData(data)
    //             })
    //             .catch(error => {
    //                 console.error(error)
    //             });
    //     }
    // }, [product])


    return (
        <div>
            <Col >
                <Card>
                    <Card.Img
                        // onClick={() => {
                        //     setModalShow(true)
                        //     setModalImage(service?.image)
                        // }}
                        variant="top" src={product?.image} />
                    <Card.Body>
                        <Card.Title className='section-subtitle'>{product?.name}</Card.Title>
                        <Card.Title className='header-minititle'>Original Price: ${product?.originalPrice}</Card.Title>
                        <Card.Title className='header-minititle'>Resell Price: ${product?.resellPrice}</Card.Title>
                        <Card.Text className='section-desc'>
                            <div className='text-wrapper'>
                                {product?.description}
                            </div>...
                        </Card.Text>
                        <Card.Title className='header-minititle'>Condition: {product?.condition}</Card.Title>
                        <Card.Title className='header-minititle'>Used Year: {product?.usedYear}</Card.Title>
                        <Card.Title className='header-minititle'>Location: {product?.location}</Card.Title>
                        <Card.Title className='header-minititle'>Phone: {product?.phone}</Card.Title>
                        <Card.Title className='header-minititle'>Posted Date: {formatDate}</Card.Title>

                        {/* <div className='user-wrapper'>
                            <Card.Title className='header-minititle'>Name: {userData?.name} ({`${userData?.isVerified ? <GoVerified /> : <VscUnverified />}`})</Card.Title>
                        </div> */}

                        <div className='service-btn-wrapper'>
                            <Link className='nav-link' to={`/services/#}`}>
                                <button className='service-btn text-center mt-4 align-center'>Book Now</button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleProductCard;