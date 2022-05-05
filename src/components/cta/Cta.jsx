import React from "react";

import classes from './cta.module.css';

import {getFullCssClassName} from '/src/utils/cssUtils';

const Cta = () => {
    const getCssName = (cssName) => getFullCssClassName(Cta.name, cssName);

    return (
        <div className={`${classes[getCssName()]} section__margin`} >
            <div className={classes[getCssName('content')]}>
                <p>
                    Request Early Access to Get Started
                </p>
                <h3>
                    Register today & start exploring the endless possiblities.
                </h3>
            </div>
            <div className={classes[getCssName('btn')]}>
                <button type="button">Get Started</button>
            </div>
        </div>
    );
}

export default Cta;