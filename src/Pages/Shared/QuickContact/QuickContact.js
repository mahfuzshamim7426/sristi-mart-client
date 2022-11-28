import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './QuickContact.css'

const QuickContact = () => {
    return (
        <div className='quick-contact'>
            <div className="container">
                <div className="quick-contact-wrapper d-flex justify-content-center">
                    <div className="right-box">
                        <h2 className='section-title text-center'>LET'S DISCUSS</h2>
                        <p className='section-desc'>Fill out the form and our manager will contact you for consultation.</p>
                        <div className='form-box'>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    Your Name
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                                <InputGroup.Text id="basic-addon3">
                                    Your Query
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                        <div className='service-btn-wrapper'>
                            <button className='service-btn text-center mt-4 align-center'>Let&apos;s Talk</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default QuickContact;