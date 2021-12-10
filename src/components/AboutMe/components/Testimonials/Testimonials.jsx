import React, { Component } from 'react'
import { TESTIMONIALS } from './TestimonialsData'
import { Carousel } from 'antd';
import './Testimonials.css'

class Testimonials extends Component{
    render(){
        return <div>
        <h1 style={{textAlign:"left", fontSize:'35px', marginTop:'20px', fontWeight:'bolder'}}>HEAR FROM OUR CLIENTS : Building Trust & Inspiring Individuals</h1>
        <Carousel autoplay>
          {
            TESTIMONIALS.map(((testimonial)=>
                <div>
                  <div className='carousel_card'>
                <h1>{testimonial.heading}</h1>
                <h2>{testimonial.subheading}</h2>
                <p>{testimonial.value}</p>
                </div>
                <img src={testimonial.pic} alt="" style={{width:"100%", border:"2px black solid"}}/>
                </div>
            ))
          }
        </Carousel>
        </div>
    }
}

export default Testimonials