import React from "react";
import { NavLink } from "react-router-dom";
import '../FormMenu.css'

export default function FormMenu(){
    return (
        <div className="App">
        <div className="menu--box">
        <h1>
        Choose from the following options:
        </h1>
            <NavLink to="/getbyid" className="information">
                Get
            </NavLink>
            <NavLink to="/postform" className="information">
                Post
            </NavLink>
            <NavLink to="/updateform" className="information">
                Update
            </NavLink>
             <NavLink to="/deleteform" className="information">
                Delete
            </NavLink>
        </div>
        </div>
    )
}