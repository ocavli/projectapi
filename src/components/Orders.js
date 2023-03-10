import React from "react";
import search from "../images/search.png"
import Status from "./Status";


function Orders(props){
    return(
        <div className="container">
            <div className="searchbar">
                <img src={search}/>
                <input
                type="text"
                placeholder="search"
                />
            </div>
            <Status/>
            <div className="cards"></div>


        </div>

    )
}

export default Orders;