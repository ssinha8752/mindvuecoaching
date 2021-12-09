import React, { Component } from 'react'
import { TESTIMONIALS } from './TestimonialsData'
import './Testimonials.css'

class Testimonials extends Component{
    render(){
        return <div className="testimonials">
            {
                TESTIMONIALS.map(((testimonial, index)=>
                    (index%2===0)?
                    <div className="tiles">
                        <div className="card">
                            <h2>{testimonial.heading}</h2>
                            <h1>{testimonial.subheading}</h1>
                            <p>{testimonial.value}</p>
                        </div>
                        <div className="card_pic">
                                <img src={testimonial.pic} alt="" style={{width:"100%"}}/>
                        </div>
                    </div>:
                    <div className="tiles">
                        <div className="card_pic">
                            <img src={testimonial.pic} alt="" style={{width:"100%"}}/>
                        </div>
                        <div className="card">
                            <h2>{testimonial.heading}</h2>
                            <h1>{testimonial.subheading}</h1>
                            <p>{testimonial.value}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    }
}

export default Testimonials