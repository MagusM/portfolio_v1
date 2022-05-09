import React from "react";

import {getFullCssClassName} from '/src/utils/cssUtils';
import {Feature} from "../../components";

import classes from './whatSM.module.css';

const features = {
    'what': {
        title: 'Who is Simon Mor',
        text: 'Very-qualified, technical and motivated team leader & full Stack Developer, ' +
            'familiar with a wide range of programming utilities and languages backend and frontend.' +
            'experienced and building a team, taking ownership and handling projects from early stages.' +
            'I\'m handling any part of the process with ease.'
    },
    'Artist': {
        title: 'Code Artist',
        text: 'For me to write code is art, and I write beautiful code. '
    },
    'Full_Stack': {
        title: 'Full Stack',
        text: 'Full Stack developer for me means: I can easily adopt and control new technology and implement it. check!'
    },
    'Mentor': {
        title: 'Mentor',
        text: 'I\'m a team leader, team player and a leader, mentoring developer to excel'
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
                <Feature title={features.Artist.title} text={features.Artist.text} />
                <Feature title={features.Full_Stack.title} text={features.Full_Stack.text} />
                <Feature title={features.Mentor.title} text={features.Mentor.text} />
            </div>
        </div>
    );
}

export default WhatSM;