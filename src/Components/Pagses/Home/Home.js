import React from 'react';
import image from '../../../image/car-banner.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} alt='' className="  w-1/2 rounded-lg shadow-2xl" />
                <div className='1/2 text-justify pr-10'>
                    <h1 className="text-5xl font-bold">Welcome to our market</h1>
                    <p className="py-6">We think, since you have entered our website. That means you will buy some kind of car. Don't stress yourself out. Because we are with you. You can take whatever you need.</p>
                    <Link to={'/products'} className="btn btn-active btn-neutral text-white">Get your product</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;