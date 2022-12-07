import './App.css'
import React from "react"
import Home from "./components/Home"
import PostForm from "./components/PostForm"
import UpdateForm from "./components/UpdateForm"
import FormMenu from "./components/FormMenu"
import MNavbar from "./components/MNavbar"
import Delete from "./components/Delete"
import Get from "./components/Get"
import GetAll from "./components/GetAll"
import { BrowserRouter as Router,  
    Route, Routes, UNSAFE_DataRouterStateContext,} from "react-router-dom";


function App () {
    return (
        <div>
        <Router>
        <MNavbar />
        {/* these are the routes for clicking a link */}
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/forms' element={<FormMenu/>} />
            <Route path='/getbyid' element={<Get/>}/>
            <Route path='/updateform' element={<UpdateForm/>} />
            <Route path='/postform' element={<PostForm/>} />
            <Route path='/deleteform' element={<Delete/>} />
            <Route path='/getall' element={<GetAll/>} />
        </Routes>
        </Router> 
        </div>
    );
}

export default App;
