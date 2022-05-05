import React from "react";

import {getFullCssClassName} from '/src/utils/cssUtils';
import {Feature} from "../../components";

import classes from './whatSM.module.css';

const features = {
    'what': {
        title: 'What is Simon Mor',
        text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
    },
    'chatbot': {
        title: 'Chatbots',
        text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
    },
    'base': {
        title: 'Knowledgebase',
        text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
    },
    'edu': {
        title: 'Education',
        text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
    }
}

const WhatSM = () => {
    const getCssName = (cssName) => getFullCssClassName(WhatSM.name, cssName);
    return (
        <div id='whsm' className={`${classes[getCssName()]} section__margin`}>
            <div className={classes[getCssName('feature')]}>
                <Feature title={features.what.title} text={features.what.text} />
            </div>
            <div className={classes[getCssName('heading')]}>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className={classes[getCssName('container')]}>
                <Feature title={features.chatbot.title} text={features.chatbot.text} />
                <Feature title={features.base.title} text={features.base.text} />
                <Feature title={features.edu.title} text={features.edu.text} />
            </div>
        </div>
    );
}

export default WhatSM;