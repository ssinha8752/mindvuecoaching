import React,{Component} from 'react';
import { Menu } from 'antd';
import { MailOutlined, UserOutlined, SettingOutlined, DribbbleOutlined, AuditOutlined,VideoCameraAddOutlined, HomeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

class Header extends React.Component {
  state = {
    current: 'Home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme={'dark'}>
        <Menu.Item key="Home" icon={<HomeOutlined />}></Menu.Item>
        <SubMenu key="AboutMe" icon={<UserOutlined />} title="About Me">
        <Menu.ItemGroup>
            <Menu.Item key="AboutMe:1">My Story</Menu.Item>
            <Menu.Item key="AboutMe:2">Associations</Menu.Item>
            <Menu.Item key="AboutMe:3">Testimonials</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="IlluminateMind" icon={<DribbbleOutlined />} title="Illuminate Mind">
          <Menu.ItemGroup>
            <Menu.Item key="IlluminateMind:1">What is Coaching</Menu.Item>
            <Menu.Item key="IlluminateMind:2">NLP</Menu.Item>
            <Menu.Item key="IlluminateMind:3">Mindfulness</Menu.Item>
            <Menu.Item key="IlluminateMind:4">Cognitive Behavior</Menu.Item>
            <Menu.Item key="IlluminateMind:5">Positive Psychology</Menu.Item>
            <Menu.Item key="IlluminateMind:6">Art of coaching</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="MindCatalogue" icon={<AuditOutlined />} title="Mind Catalogue">
          <Menu.ItemGroup>
            <Menu.Item key="MindCatalogue:1">Executive coaching</Menu.Item>
            <Menu.Item key="MindCatalogue:2">Life Coaching</Menu.Item>
            <Menu.Item key="MindCatalogue:3">Youth Coaching</Menu.Item>
            <Menu.Item key="MindCatalogue:4">Trainings and Workshops</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="MindAndMatter" icon={<SettingOutlined />} title="Mind and Matter">
          <Menu.ItemGroup>
            <Menu.Item key="MindAndMatter:1">Articles</Menu.Item>
            <Menu.Item key="MindAndMatter:2">Quotes</Menu.Item>
            <Menu.Item key="MindAndMatter:3">Doodles</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="Podcasts" icon={<VideoCameraAddOutlined />} title="Podcasts">
          <Menu.ItemGroup title="Podcast #1">
            <Menu.Item key="Podcast:1">Ozlem Soriagolu</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Podcast #2">
            <Menu.Item key="Podcast:2">Anurag Kapoor</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Podcast #3">
            <Menu.Item key="Podcast:3">Prajna Paramite</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Podcast #4">
            <Menu.Item key="Podcast:4">Harsh Kumar Nangea</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Podcast #5">
            <Menu.Item key="Podcast:5">Dr. Meenal Chauhan</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay" icon={<MailOutlined/>}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header