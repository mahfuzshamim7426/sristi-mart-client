import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoVerified } from 'react-icons/go';
import { VscUnverified } from 'react-icons/vsc';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../../context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const SingleProductCard = ({ product }) => {
    const { user } = useContext(AuthContext);
    const datePre = new Date(product?.date);
    const [userData, setUserData] = useState({})
    const [modalShow, setModalShow] = React.useState(false);


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

    console.log('product?.seller', product?.seller)

    useEffect(() => {
        if (product?._id) {
            fetch(`https://sristi-mart-server.vercel.app/users/one/${product?.seller}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    setUserData(data)
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }, [product])

    const handleAddBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form?.name?.value;
        const email = form?.email?.value;
        const itemName = form?.itemName?.value;
        const price = form?.price?.value;
        const location = form?.location?.value;


        const inputData = {
            name,
            email,
            itemName,
            price,
            location,
        }

        console.log('inputData', inputData)
        setModalShow(false)
        toast.success('Item is Booked Successfully', { autoClose: 2000, closeOnClick: true, })

        // fetch(`https://ms-architect-server.vercel.app/reviews`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //         authorization: `Bearer ${localStorage.getItem('msarc-token')}`
        //     },
        //     body: JSON.stringify(inputData)
        // })
        //     .then(response => {
        //         setModalShow(false)
        //         toast.success('Item is Booked Successfully', { autoClose: 2000, closeOnClick: true, })
        //     })
        //     .catch(error => {
        //         toast.error('Sorry, Server Error', { autoClose: 2000, closeOnClick: true, })
        //     });
    }

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

                        <div className='user-wrapper'>
                            <Card.Title className='header-minititle'>Name: {userData?.name} {' '} {userData?.isVerified ? <GoVerified /> : <VscUnverified />}</Card.Title>
                        </div>

                        <div className='service-btn-wrapper'>
                            <button
                                onClick={() => {
                                    setModalShow(true)
                                }}
                                className='service-btn text-center mt-4 align-center'>Book Now</button>

                        </div>
                        <ToastContainer closeOnClick />
                    </Card.Body>
                </Card>
            </Col>

            <BookNowModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );

    function BookNowModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h4>Name: {user?.displayName}</h4>
                        <h4>Email: {user?.email}</h4>
                        <form onSubmit={handleAddBooking}>
                            <div>
                                <div className="mb-3">
                                    <label for="formFile" className="form-label">Name</label>
                                    <input name="name" value={user?.displayName} readOnly className="form-control" type="text" id="formFile" />
                                </div>
                                <div className="mb-3">
                                    <label for="formFile" className="form-label">Emai</label>
                                    <input name="email" value={user?.email} readOnly className="form-control" type="email" id="formFile" />
                                </div>
                                <div className="mb-3">
                                    <label for="formFile" className="form-label">Item Name</label>
                                    <input name="itemName" value={product?.name} readOnly className="form-control" type="text" id="formFile" />
                                </div>
                                <div className="mb-3">
                                    <label for="formFile" className="form-label">Price</label>
                                    <input name="price" value={product?.resellPrice} readOnly className="form-control" type="text" id="formFile" />
                                </div>
                                <div className="mb-3">
                                    <label for="formFile" className="form-label">Phone</label>
                                    <input name="phone" className="form-control" type="text" id="formFile" />
                                </div>

                                <div className="mb-3">
                                    <label for="formText" className="form-label">Location</label>
                                    <input name="location" className="form-control" type="text" id="formText" />
                                </div>

                                <div className='service-btn-wrapper'>
                                    <button
                                        type='submit'
                                        className='service-btn text-center mt-4 align-center'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>

            </Modal>
        );
    }
};

export default SingleProductCard;