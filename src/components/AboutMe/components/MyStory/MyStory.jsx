import React, { Component } from 'react'
import { MY_STORY } from './MyStoryData';
import './MyStory.css'

class MyStory extends Component{
    render(){
        return <div>
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