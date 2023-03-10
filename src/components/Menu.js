import React from "react"
import "./Menu.css";
import logo from "../images/logo.png"
import home from "../images/home.png"
import messages from "../images/messages.png"
import orderhistory from "../images/orderhistory.png"
import settings from "../images/settings.png"
import statistics from "../images/statistics.png"
import products from "../images/products.png"

function Menu(){
    return(
        <div className="menubar">
            <img  src={logo} />
            
            <div className="home">
                <div>
                    <img src={home} />
                    <p>HOME</p>
                </div>
                <div className="orderHistory">
                    <img src={orderhistory} />
                    <p >ORDER HISTORY</p>
                </div>
                <div className="messages">
                    <img src={messages} />
                    <p>MESSAGES</p>
                </div>
                <div className="statistics">
                    <img src={statistics} />
                    <p>STATISTICS</p>
                </div>
                <div className="products">
                    <img src={products} />
                    <p>PRODDUCTS</p>
                </div>
                
                <div className="settings">
                    <img src={settings} />
                    <p>SETTINGS</p>
                </div>
               
            </div>
        
        </div>
    )
}
export default Menu;