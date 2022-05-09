import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from '../../assets/logo.svg';


import classes from './navbar.module.css';

const Menu = () => (
    <>
        <p> <a href="#home">Home</a> </p>
        <p> <a href="#whsm">Who am I?</a> </p>
        <p> <a href="#possibility">Open AI</a> </p>
        <p> <a href="#feature">Case Study</a> </p>
        <p> <a href="#blog">Library</a> </p>
    </>
);

const NavbarSignin = ({cssClass}) => (
    <div className={classes[cssClass]}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
    </div>);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className={classes['sm__navbar']}>
            <div className={classes['sm__navbar-links']}>
                <div className={classes['sm__navbar-links_logo']}>
                    <img src={logo} alt={logo} />
                </div>

                <div className={classes['sm__navbar-links_container']}>
                    <Menu />
                </div>
            </div>

            <NavbarSignin cssClass='sm__navbar-sign' />
            <div className={classes['sm__navbar-menu']}>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={ () => setToggleMenu(false) } />
                    : <RiMenu3Line color="#fff" size={27} onClick={ () => setToggleMenu(true) } />
                }
                {toggleMenu && (
                    <div className={`${classes['sm__navbar-menu_container']}  scale-up-center`}>
                        <div className={classes['sm__navbar-menu_container-links']}>
                            <Menu />
                            <NavbarSignin cssClass='sm__navbar-menu_container-links-sign' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;