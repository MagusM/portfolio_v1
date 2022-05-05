import React from "react";

import classes from './feature.module.css';

const Feature = ({ title, text }) => (
    <div className={classes['sm__features-container__feature']}>
        <div className={classes['sm__features-container__feature-title']}>
            <div />
            <h1>{title}</h1>
        </div>
        <div className={classes['sm__features-container__feature-text']}>
            <p>{text}</p>
        </div>
    </div>
);

export default Feature;