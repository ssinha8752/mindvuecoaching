import React,{useState} from 'react';
import mountain1 from './images/mountain1.png'
import mountain2 from './images/mountain2.png'
import text from './images/text.png'
import './content.css'
import { CONTENT, TILES } from './data/ContentData'

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
                <h2>{CONTENT.head}</h2>
                <p>
                {CONTENT.p1}
                </p>
                <p>
                {CONTENT.p2}
                </p>
            </div>
            <div className="content">
               <h1>{TILES.head}</h1>
            </div>
            {TILES.tiles.map(((tile, index)=>
                (index%2===0)?
                <div className="tiles">
                <div className="card">
                    <h2>{tile.head}</h2>
                    <p>{tile.value}</p>
                </div>
                <div className="card_pic">
                    <img src={tile.pic} alt="" style={{width:"100%"}}/>
                </div>
                </div>:
                <div className="tiles">
                <div className="card_pic">
                    <img src={tile.pic} alt="" style={{width:"100%"}}/>
                </div>
                <div className="card">
                    <h2>{tile.head}</h2>
                    <p>{tile.value}</p>
                </div>
                </div>
            ))}
        </div>
    }

export default Content