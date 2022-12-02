import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../../../../src/logo.png';
import './Header.css'
import { AuthContext } from '../../../context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log('user', user)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className='header-container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='navbar-brand' to="/"><img className='logo-img' src={logo} alt="" />MS Architect</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/services">Categery</Link>
                            <Link className='nav-link' to="/services">Advertise Items</Link>
                            <Link className='nav-link' to="/blog">Blog</Link>
                            {user &&
                                user?.email &&
                                <Link className='nav-link' to="/add-service">Add Products</Link>
                            }

                        </Nav>
                        <Nav>
                            {user &&
                                user?.email ?
                                <button onClick={handleSignOut} className="logOut_btn">Log out</button>
                                : <Link to='/login'>
                                    <button className='logIn_btn'>Log In</button>
                                </Link>
                            }
                            {user && user?.photoURL &&
                                <button className='user-photo' data-toggle="tooltip" data-placement="bottom" title={user?.displayName}>
                                    <img src={user?.photoURL} alt="user" />
                                </button>
                            }
                            {user && !user?.photoURL &&
                                <button className='user-photo' data-toggle="tooltip" data-placement="bottom" title={user?.displayName}>
                                    <img src='./images/user/placeholder-user.png' alt="user" />
                                </button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;