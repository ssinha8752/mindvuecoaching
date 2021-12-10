import React, { Component } from 'react'
import { MY_STORY } from './MyStoryData';
import './MyStory.css'

class MyStory extends Component{
    render(){
        return <div className='mystory_container'>
            <h1 style={{textAlign:"left", fontSize:'35px', marginTop:'20px', fontWeight:'bolder'}}>MY STORY</h1>
            {
                MY_STORY.map(((story)=>
                    <div className="mystory">
                        <h2>{story.heading}</h2>
                        <p>{story.para}</p>
                    </div>
                ))
            }
        </div>
    }
}

export default MyStory;