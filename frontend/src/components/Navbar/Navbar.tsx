import styled from 'styled-components';
import logo from '../Login/logo.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

const LogoImage = styled.img`
    width: 80px;
    margin-left: 1em;
`;

const NavbarWrapper = styled.div`
    position: sticky;
    width: 100%;
    top: 0;
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
`;

const NavLogo = styled.h1`
    color: white;
    justify-self: start;
    margin: 0;
    margin-left: .2em;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
`;

const NavMenu = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
`;

const NavItem = styled.li`
    align-items: center;
`;

export default function Navbar() {
    return(
        <NavbarWrapper>
            <NavLogo>Faster</NavLogo><LogoImage src={logo} alt="Faster's logo" />
            <NavMenu>
                <Link className="nav-link" to='/'>
                    <NavItem>
                            Home
                    </NavItem>
                </Link>
                <Link className="nav-link">
                    <NavItem>
                            Services
                    </NavItem>
                </Link>
                <Link className="nav-link">
                    <NavItem>
                            Contact
                    </NavItem>
                </Link>
                <Link className="nav-link">
                    <NavItem>
                            About Us
                    </NavItem>
                </Link>
                <Link className="nav-link">
                    <NavItem>
                            Account
                    </NavItem>
                </Link>
                <Link className="yolo" to='/login'>
                    <NavItem>
                            Login
                    </NavItem>
                </Link>
            </NavMenu>
        </NavbarWrapper>
    );
};
