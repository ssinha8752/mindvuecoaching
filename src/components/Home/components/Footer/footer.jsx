import React,{Component} from 'react';
import { Menu } from 'antd';
import { FacebookFilled, LinkedinFilled, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';

class Footer extends Component{
    render(){
        return <div style={{display:"flex", justifyContent:"center"}}>
        <div>
        <Menu>
            <Menu.Item key="wapp" icon={<WhatsAppOutlined style={{ fontSize: '30px'}}/>}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          </a>
        </Menu.Item>
        </Menu>
        </div>
        <div>
        <Menu>
        <Menu.Item key="lkdin" icon={<LinkedinFilled style={{ fontSize: '30px'}}/>}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          </a>
        </Menu.Item>
        </Menu>
        </div>
        <div>
        <Menu>
        <Menu.Item key="twtr" icon={<TwitterOutlined style={{ fontSize: '30px'}}/>}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          </a>
        </Menu.Item>
        </Menu>
        </div>
        <div>
        <Menu>
        <Menu.Item key="fb" icon={<FacebookFilled style={{ fontSize: '30px'}}/>}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          </a>
        </Menu.Item>
        </Menu>
        </div>
        </div>
    }
}

export default Footer