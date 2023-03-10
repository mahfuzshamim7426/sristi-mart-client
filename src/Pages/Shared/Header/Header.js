import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../../../../src/logo.png';
import './Header.css'
import { AuthContext } from '../../../context/AuthProvider';
import useSeller from '../../../hooks/useSeller';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    console.log('user from header', user)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className='header-container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='navbar-brand' to="/"><img className='logo-img' src={logo} alt="" />Sristi Mart</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            {user &&
                                user?.email && isSeller &&
                                <Link className='nav-link' to="/my-product">My Products</Link>
                            }
                            <Link className='nav-link' to="/blog">Blog</Link>
                            {user &&
                                user?.email && isSeller &&
                                <Link className='nav-link' to="/add-product">Add Products</Link>
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