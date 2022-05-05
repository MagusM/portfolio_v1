import React from "react";

import classes from './blog.module.css';

import {getFullCssClassName} from '/src/utils/cssUtils';
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

//todo: implement date obj
//TODO: change title
const title = "Simon and Open  AI is the future. Let us exlore how it is?";

const Blog = () => {
    const getCssName = (cssName) => getFullCssClassName(Blog.name, cssName);

    return (
        <div id="blog" className={`${classes[getCssName()]} section__padding`} >
            <div className={classes[getCssName('heading')]}>
                <h1 className="gradient__text">
                    A lot is happening,
                    I am blogging about it.
                </h1>
            </div>

            <div className={classes[getCssName('container')]}>
                <div className={classes[getCssName('container_groupA')]}>
                    <Article date={'today'} title={title} imgUrl={blog01} />
                </div>
                <div className={classes[getCssName('container_groupB')]}>
                    <Article date={'today'} title={title} imgUrl={blog02} />
                    <Article date={'today'} title={title} imgUrl={blog03} />
                    <Article date={'today'} title={title} imgUrl={blog04} />
                    <Article date={'today'} title={title} imgUrl={blog05} />
                </div>
            </div>
        </div>
    );
}

export default Blog;