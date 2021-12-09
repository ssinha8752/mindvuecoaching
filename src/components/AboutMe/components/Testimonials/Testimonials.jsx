import React, { Component } from 'react'
import { TESTIMONIALS } from './TestimonialsData'
import { Carousel } from 'antd';
import './Testimonials.css'

class Testimonials extends Component{
    render(){
        // return <div className="testimonials">
        //     {
        //         TESTIMONIALS.map(((testimonial, index)=>
        //             (index%2===0)?
        //             <div className="tiles">
        //                 <div className="card">
        //                     <h2>{testimonial.heading}</h2>
        //                     <h1>{testimonial.subheading}</h1>
        //                     <p>{testimonial.value}</p>
        //                 </div>
        //                 <div className="card_pic">
        //                         <img src={testimonial.pic} alt="" style={{width:"100%"}}/>
        //                 </div>
        //             </div>:
        //             <div className="tiles">
        //                 <div className="card_pic">
        //                     <img src={testimonial.pic} alt="" style={{width:"100%"}}/>
        //                 </div>
        //                 <div className="card">
        //                     <h2>{testimonial.heading}</h2>
        //                     <h1>{testimonial.subheading}</h1>
        //                     <p>{testimonial.value}</p>
        //                 </div>
        //             </div>
        //         ))
        //     }
        // </div>
        const contentStyle = {
            height: '600px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#242B2E',
        };
        return <Carousel autoplay>
            <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
        </Carousel>
    }
}

export default Testimonials