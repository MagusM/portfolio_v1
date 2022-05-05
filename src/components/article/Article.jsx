import React from "react";

import classes from './article.module.css';

import {getFullCssClassName} from '/src/utils/cssUtils';

const Article = ( {date, title, imgUrl} ) => {
    const getCssName = (cssName) => getFullCssClassName(Article.name, cssName);

    return (
        <div className={classes[getCssName()]}>
            <div className={classes[getCssName('image')]}>
                <img src={imgUrl} alt="blog" />
            </div>
            <div className={classes[getCssName('content')]}>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
}

export default Article;