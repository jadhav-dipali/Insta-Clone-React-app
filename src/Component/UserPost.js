import React, { createContext, useContext, useEffect, useState } from "react"
import '../style/userPost.css'
import {FeatchData} from "./FetchData";
import Posts from "./Posts";
import Cont from "../context/ContextPost";
import { UserContext } from "../context/ContextPost";

function UserPost(){
  

const {user}= useContext(UserContext);
console.log(user);
    return<>
   
    
   {user.map((d,ind)=><div id="rect" key={ind}>
    <div className="Child1">
    <div>
    <h4 id="name">{d.author}</h4>
    <p id="location">{d.location}</p>
    </div>
    <div className="Child2">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
    </div>
    </div>

    <div id="img-container">
        <img src={`https://insta-clone-database.onrender.com/post/${d.file}`} id="img-size"></img>
    </div>

    <div className="icon-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78Q1WZHbkR3u23R2_3GLTlVEiiPLpZozQUA&usqp=CAU " className="icon"></img>
        <img src="https://cdn4.iconfinder.com/data/icons/office-line-vol-2-1/70/send__message__mail__paperplane__rocket-512.png" className="icon"></img>

        <h5 id="date">{new Date().toLocaleDateString()}</h5>
    </div>

    <div className="like">0 Likes</div>

    <div id="description">{d.description}</div>
   
    
    </div>)}
    
    </>
}


export default UserPost