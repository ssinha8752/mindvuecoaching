import React,{useState} from 'react';
import mountain1 from './images/mountain1.png'
import mountain2 from './images/mountain2.png'
import text from './images/text.png'
import Heart from './images/heart2.jpg'
import Thought from './images/Thought.jpg'
import Soul from './images/Soul.jpg'
import Health from './images/Health.jpg'
import './content.css'
import Header from '../Header/Header';

function Content(){

        const [offset, setOffSet] = useState();
        const handleScroll = () => setOffSet(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);

        return <div>
            <div className="zoom">
            <img src={mountain1} alt="" id="mountain1" style={{ width: (100 + offset * 0.3) + "%"}}/>
            <img src={mountain2} alt="" id="mountain2" style={{ width: (100 + offset * 0.3) + "%"}}/>
            <img src={text} alt="" id="text" style={{ top: `-${10 + offset * 0.1 + "%"}`}}/>
            </div>
            <div className="content">
                <h2>“All that we are is the result of what we have thought. The mind is everything. What we think is what we become.” – Buddha</h2>
                <p>
                At MindVue, we believe in creating a safe space for you which involves exploring the subconscious mind, uncovering your purpose, connecting to your core values and provoking fresh perspectives.
                </p>
                <p>
                We create this safe space by designing introspective, innovative, interesting coaching & training workshops which focuses on four fundamental principles.
                </p>
            </div>
            <div className="content">
               <h1>PRINCIPLES OF COACHING AND TRAINING</h1>
            </div>
            <div className="tiles">
                <div className="card">
                    <h2>THOUGHT VUE</h2>
                    <p>Thoughts are things. They are powerful. They are preemptive. The very thoughts running through your mind can help to manifest the life of your dreams or draw you closer to your greatest fears</p>
                </div>
                <div className="card_pic">
                    <img src={Thought} alt="" id="heart" style={{width:"100%"}}/>
                </div>
            </div>
            <div className="tiles">
            <div className="card_pic">
                    <img src={Heart} alt="" id="heart" style={{width:"100%"}}/>
                </div>
                <div className="card">
                    <h2>HEART VUE</h2>
                    <p>Emotions determine the quality of our lives. We dont have much control over what we become emotional about, but it is possible to make some changes in what triggers our emotions and how we behave when we are emotional.</p>
                </div>
            </div>
            <div className="tiles">
                <div className="card">
                    <h2>SOUL VUE</h2>
                    <p>It relates to the connection of that we have with our soul. It is about feeling the joy, satisfaction and warm feeling in your heart and gut</p>
                </div>
                <div className="card_pic">
                    <img src={Soul} alt="" id="heart" style={{width:"100%"}}/>
                </div>
            </div>
            <div className="tiles">
                <div className="card_pic">
                    <img src={Health} alt="" id="heart" style={{width:"100%"}}/>
                </div>
                <div className="card">
                    <h2>HEALTH VUE</h2>
                    <p>Our Health is at the center of our life. Every part of our life relies on us having good health. even relatively minor health issues such as aches, pains, lethargy and indigestion take a toll on our happiness and stress levels.</p>
                </div>
            </div>
        </div>
    }

export default Content