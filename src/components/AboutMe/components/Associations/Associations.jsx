import React, { Component } from 'react'
import emcc from './AssociationImages/emcc.png'
import sparkus from './AssociationImages/sparkus.jpg'
import PCC from './AssociationImages/PCC.png'
import Kaplan from './AssociationImages/Kaplan.jpg'
import Bravely from './AssociationImages/Bravely.png'

class Associations extends Component{
    render(){
        return <div>
            <h1 style={{textAlign:"left", fontSize:'35px', marginTop:'20px', fontWeight:'bolder'}}>ASSOCIATIONS</h1>
            <img src={emcc} href="https://www.emccglobal.org/" alt="" style={{margin:"15px", width:"15%"}}/>
            <img src={sparkus} href="https://sparkus.com/our-team-and-coaches/" alt="" style={{margin:"15px", width:"15%"}}/>
            <img src={Kaplan} href="https://www.kaplansolutions.com/en-us/learning-solutions/performance-academy" alt="" style={{margin:"15px", width:"15%"}}/>
            <img src={Bravely}  alt="" style={{margin:"15px", width:"15%"}}/>
            <img src={PCC} alt="" href="https://coachingfederation.org/" style={{margin:"15px", width:"15%"}}/>
        </div>
    }
}

export default Associations