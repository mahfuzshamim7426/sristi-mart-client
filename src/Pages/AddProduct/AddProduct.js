import React, { useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import './AddProduct.css';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const allCategories = useLoaderData()
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Add Prodyct Page Sristi Mart"
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form?.name?.value;
        const image = form?.image?.value;
        const originalPrice = form?.originalPrice?.value;
        const resellPrice = form?.resellPrice?.value;
        const location = form?.location?.value;
        const condition = form?.condition?.value;
        const description = form?.description?.value;
        const usedYear = form?.usedYear?.value;
        const phone = form?.phone?.value;
        const category = form?.category?.value;
        const seller = user?.email

        const productData = {
            name,
            image,
            originalPrice,
            resellPrice,
            location,
            condition,
            description,
            usedYear,
            phone,
            category,
            seller,
        }

        console.log('productData', productData)

        fetch('https://sristi-mart-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('msarc-token')}`
            },
            body: JSON.stringify(productData)
        })
            .then(response => response.json())
            .then(response => {
                toast.success('Product Added Successfully', { autoClose: 2000, closeOnClick: true, })
                navigate('/my-product')
                form.reset();
            })
            .catch(error => {
                console.error(error)
                toast.error('Sorry, Server Error', { autoClose: 2000, closeOnClick: true, })
            });
    }

    return (
        <div className='add-product-container'>
            <h2 className='section-title'>Add Product</h2>
            <Form onSubmit={handleSubmit} className='form-items-container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control className='form-item' name="name" type="input" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control className='form-item' name="image" type="input" placeholder="Enter image link" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Original Price</Form.Label>
                    <Form.Control className='form-item' name="originalPrice" type="input" placeholder="Enter price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Resell Price</Form.Label>
                    <Form.Control className='form-item' name="resellPrice" type="input" placeholder="Enter price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Location</Form.Label>
                    <Form.Control className='form-item' name="location" type="input" placeholder="Enter location" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className='form-item' name="phone" type="input" placeholder="Enter phone" />
                </Form.Group>
                <select
                    name='condition'
                    className="form-select" aria-label="Default select example">
                    <option selected>Condition</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">good</option>
                    <option value="Fair">Fair</option>
                </select>
                <select
                    name='usedYear'
                    className="form-select" aria-label="Default select example">
                    <option selected>Used Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
                <select
                    name='category'
                    className="form-select" aria-label="Default select example">
                    <option selected>Category</option>
                    {allCategories &&
                        allCategories?.map((category, index) => (
                            <option value={category?._id}>{category?.name}</option>
                        ))}

                </select>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control className='form-item' name="description" type="text-area" placeholder="Enter description" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer closeOnClick />
        </div>
    );
};

export default AddProduct;