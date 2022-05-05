import React from "react";

import {getFullCssClassName} from '/src/utils/cssUtils';
import {google, slack, atlassian, dropbox, shopify} from './imports';

import classes from './brand.module.css';

const Brand = () => {
    const getCssName = (cssName) => getFullCssClassName(Brand.name, cssName);
    return (
        <div className={`${classes[getCssName()]} section__padding`}>
            <div>
                <img src={google} alt='google' />
            </div>
            <div>
                <img src={slack} alt='slack' />
            </div>
            <div>
                <img src={atlassian} alt='atlassian' />
            </div>
            <div>
                <img src={dropbox} alt='dropbox' />
            </div>
            <div>
                <img src={shopify} alt='shopify' />
            </div>
        </div>
    );
}

export default Brand;