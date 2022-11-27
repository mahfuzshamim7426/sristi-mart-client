import React from 'react';
import Cover from '../Shared/Cover/Cover';
// import { useLoaderData } from 'react-router-dom';
// import CourseSectiuon from '../Shared/CourseSection/CourseSectiuon';



const Home = () => {
    // const allCourse = useLoaderData()
    return (
        <div className='home-container'>
            <Cover></Cover>
            {/* <CourseSectiuon allCourse={allCourse} /> */}

        </div>
    );
};

export default Home;