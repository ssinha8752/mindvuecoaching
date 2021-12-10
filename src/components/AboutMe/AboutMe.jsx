import React, { Component } from 'react'
import MyStory from './components/MyStory/MyStory';
import './AboutMe.css'
import Testimonials from './components/Testimonials/Testimonials';
import Associations from './components/Associations/Associations';

class AboutMe extends Component{
    render(){
        return <div className="AboutMe_container">
            <div><MyStory/></div>
            <div><Testimonials/></div>
            <div><Associations/></div>
        </div>
    }
}

export default AboutMe;