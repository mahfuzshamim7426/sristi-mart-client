import React, { useEffect } from 'react';
import './NotFoundPage.css'

const NotFoundPage = () => {
    useEffect(() => {
        document.title = "404 Page Sristi Mart"
    }, [])
    return (
        <div className='notfound'>
            <div className='px-5'>
                <h1 className='text-center notFounrTitle'>404</h1>
                <h3 className='text-center notFounrDes'>Page Not Found</h3>
            </div>
        </div>
    );
};

export default NotFoundPage;