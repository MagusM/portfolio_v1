import React from "react";

import classes from './possibility.module.css';

import {getFullCssClassName} from '/src/utils/cssUtils';
import possibilityImg from '/src/assets/possibility.png';

const componentId = 'possibility';

const Possibility = () => {
    const getCssName = (cssName) => getFullCssClassName(Possibility.name, cssName);

    return (
        <div id={componentId} className={`${classes[getCssName()]} section__padding`} >
            <div className={classes[getCssName('image')]}>
                <img src={possibilityImg} alt="possibility" />
            </div>
            <div className={classes[getCssName('content')]}>
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
}

export default Possibility;