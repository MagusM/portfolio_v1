import React from 'react';

import { Footer, Blog, Possibility, Features, Header, WhatSM } from "./containers";
import { Article, Brand, Cta, Feature, Navbar } from "./components";

import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatSM />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;