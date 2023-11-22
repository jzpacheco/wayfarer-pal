import React from "react";
import Destinations from "../components/Destinations";
import Menu from "../components/Menu";


export default function HomeScreen(){
    return(
        <div className="App">
            <Menu />
            <Destinations />
        </div>
        
    )
}