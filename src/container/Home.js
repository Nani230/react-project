import React, { useState } from "react";
import  "./style.css"

function Home(){
    const[name, setname]= useState(0)
    const myname = ()=>{
        
            setname(name+1)}
    
    const myoff = ()=>{
        if(name>0){
        setname(name-1)
    }
    }
    return(
        <div>
           <div className="navbar">
           <h1>up and down ap</h1>
           </div>
            <h1 className="head">{name}</h1>
           <button className="button1" onClick={()=>myname()}>+</button>
           <button className="button2" onClick={()=>myoff()}>-</button>

        </div>
    );
}






export default Home;