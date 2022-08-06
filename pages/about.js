import React from 'react'
import Head from 'next/head'
import Accordian from '../components/Accordian';
const about = () => {
    var dob = new Date('2010-10-28');
    var month = Date.now() - dob.getTime();
    var age = new Date(month)
    var year = age.getUTCFullYear();
    var realAge = Math.abs(year-1970);
    return (
        <div>
            <Head>
                <title>About Us</title>
            </Head>
            <div>
                <h1 className='about-head'>About Me</h1>
            </div>
            <div className="w-full text-center space-y-10 mt-10">
            <Accordian title={"Who am I?"} details={`My name is Sridhar Hisaria. I initially created a youtube channel name 'Basic Funda Developer' as I thought of providing little guides about coding and I chose this name as my father suggested it. I later thought about changing the name of the channel to 'Codes Guide' as it looked more suitable. My age is ${realAge} right now (Date of Birth: 28 October 2010)`} />


            <Accordian title={'Why I started this website?'} details="I started this website because of my Fiverr service that I provided and I wanted to promote it and one of the main reason is that the Fiverr profile required a website." />
             </div>
        </div>
    )
}

export default about