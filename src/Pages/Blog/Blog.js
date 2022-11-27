import React, { useEffect } from 'react';
import './Blog.css'

const Blog = () => {
    useEffect(() => {
        document.title = "Blog Page Ms-Architect"
    }, [])

    return (
        <div className='blog-container'>
            <div className='container'>
                <div className='blog-container'>
                    <h1 className='text-center py-4'>LATEST BLOGS</h1>
                    <div className="blog-content mb-4">
                        <h3>What are the different ways to manage a state in a React application?</h3>
                        <p>In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.
                            URL:Keeping such data in the URL allows users to share deep links with others.
                            Web Storage:he second option is to store the state in the browser via web storage.
                            Local State:The third option is to use store state locally.
                        </p>
                    </div>
                    <div className="blog-content mb-4">
                        <h3>How does prototypical inheritance work?</h3>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                        </p>
                    </div>
                    <div className="blog-content mb-4">
                        <h3>What is a unit test? Why should we write unit tests?</h3>
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        </p>
                    </div>
                    <div className="blog-content pb-4">
                        <h3>React vs. Angular vs. Vue?</h3>
                        <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;