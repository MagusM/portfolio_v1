import React from "react";

import classes from './footer.module.css';

import {getFullCssClassName} from '/src/utils/cssUtils';

import Logo from '/src/assets/logo.svg'

const Footer = () => {
    const getCssName = (cssName) => getFullCssClassName(Footer.name, cssName);

    return (
        <div className={`${classes[getCssName()]} section__padding`}>
            <div className={classes[getCssName('heading')]}>
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className={classes[getCssName('btn')]}>
                <p>Request Early Access</p>
            </div>

            <div className={classes[getCssName('links')]}>
                <div className={classes[getCssName('logo')]}>
                    <img src={Logo} alt="logo" />
                    <p>
                        Israel, All Rights Reserved
                    </p>
                </div>
                <div className={classes[getCssName('div')]}>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className={classes[getCssName('div')]}>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className={classes[getCssName('div')]}>
                    <h4>Get in touch</h4>
                    <p>Israel</p>
                    <p>0542055028</p>
                    <p>simomor@gmail.com</p>
                </div>
            </div>

            <div className={classes[getCssName('copyright')]}>
                <p>
                    © {new Date().getFullYear()} Simon Mor. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;