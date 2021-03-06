import React from "react";

import {getFullCssClassName} from '/src/utils/cssUtils';
import people from '/src/assets/people.png';
import ai from '/src/assets/ai.png';

import classes from './Header.module.css';

const Header = () => {
    const getCssName = (cssName) => getFullCssClassName(Header.name, cssName);

    return (
        <div id="home" className={`${classes[getCssName()]} section__padding`}>
            <div className={classes[getCssName('content')]}>
                <h1 className="gradient__text">
                    Build Something
                    amazing with me!
                </h1>
                <p>
                    I'm an experienced full stack team leader and a software developer. <br />
                    A part of building other amazing apps for myself and other clients,<br />
                    I can build an amazing product for you as well.
                </p>

                <div className={classes[getCssName('content__input')]}>
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get started</button>
                </div>

                <div className={classes[getCssName('content__people')]}>
                    <img src={people} alt="people" />
                    <p>
                        1,600 people requested access a visit in last 24 hours
                    </p>
                </div>
            </div>
            <div className={classes[getCssName('image')]}>
                <img src={ai} alt="ai" />
            </div>
        </div>
    );
}

export default Header;