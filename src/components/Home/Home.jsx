import React,{Component} from "react";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";

class Home extends Component{
    render()
    {
         return  <div>
             Home Page
             <Header/>
            <Content/>
            <Footer/>
         </div>
    }
}

export default Home;