import React, { useEffect } from 'react';
import Cover from '../Shared/Cover/Cover';
import QuickContact from '../Shared/QuickContact/QuickContact';
import { useLoaderData } from 'react-router-dom';
import CategorySection from './CategorySection/CategorySection'

const Home = () => {
    const allCategories = useLoaderData()

    useEffect(() => {
        document.title = "Home Page Sristi Mart"
    }, [])

    return (
        <div className='home-container'>
            <Cover></Cover>

            <CategorySection allCategories={allCategories} />

            <QuickContact></QuickContact>

        </div>
    );
};

export default Home;