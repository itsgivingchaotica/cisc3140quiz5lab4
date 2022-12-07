import React, { useState } from "react";
import { Alert } from "antd";
import axios from "axios";
import '../Forms.css';

function UpdateForm(){
    const url ="http://localhost:8080/squirrels"

    const [showAlert, setShowAlert] = useState(false)
    const [showError, setShowError] = useState(false)
    const [data, setData] = useState({
        squirrel_id: "",
        age: "",
        color: "",
        active_time:"",
        loc_quad:"",
        loc_buiding:"",
        size:"",
        gender:""
    })
    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    //async and await
    function submit(e) {

        let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8'
  }
};
        //object
        e.preventDefault();
        axios.put(url,
            { 
    "Key": {
        "squirrel_id": data.squirrel_id
    },
    "TableName": "BCSquirrels",
    "AttributeUpdates": {
        "age":{
            "Action": "PUT",
            "Value": data.age
        },
        "color":{
            "Action": "PUT",
            "Value": data.color
        },
        "active_time":{
            "Action": "PUT",
            "Value": data.active_time
        },
        "loc_quad":{
            "Action": "PUT",
            "Value": data.loc_quad
        },
        "size":{
            "Action": "PUT",
            "Value": data.size
        },
        "gender":{
            "Action": "PUT",
            "Value": data.gender
        },
    }
 },axiosConfig
        )
        .then(res => {
            setTimeout(() => {
                //show a success alert
                setShowAlert(true)
            },200);
            console.log(res.data);
       })
        .catch(error => {
            setTimeout(() => {
                //show an error alert when ID wasnt submitted
                setShowError(true)
            },200);
            console.log(error.response);
        })


        if (!showAlert && showError){
        setShowError(false);
        }
        window.location.onload = timedRefresh(5000);

    function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}
}

    return (
    <div className="App">
    <h1 className="form-title">Update Entry</h1>
    <div className="information">
    {showAlert && <Alert className = "ant-notification-center" 
      message="Success!"
      description="Post was submitted. Refreshing momentarily"
      type="success"
      showIcon
    />}
    {showError && <Alert className = "ant-notification-center"   
      message="Failure!"
      description="Must provide Squirrel ID"
      type="error"
      showIcon
    />}
    <form onSubmit={(e) => submit(e)}>
     <div className="form-floating mb-3 mt-3">
     <input onChange={(e) => {handle(e)}} type="text" className="form-control" id="squirrel_id" placeholder="Enter Squirrel ID:" name="squirrel_id"/>
     <label for="squirrel_id"></label>
    </div>
    <select onChange={(e)=>handle(e)} id="age" value = {data.age} className="form-select form-select-lg mb-4" aria-label=".form-select-lg example">
        <option selected>Age</option>
        <option value="Adult">Adult</option>
        <option value="Juvenile">Juvenile</option>
    </select>
    <select onChange={(e)=>handle(e)} id="color" value = {data.color} className="form-select form-select-lg mb-4" aria-label=".form-select-lg example">
        <option selected>Color</option>
        <option value="Black">Black</option>
        <option value="Cinnamon">Cinnamon</option>
        <option value="Gray">Gray</option>
    </select>
     <select onChange={(e)=>handle(e)} id="active_time" value = {data.active_time} className="form-select form-select-lg mb-4" aria-label=".form-select-lg example">
        <option selected>Time Seen Active</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
    </select>
    <select onChange={(e)=>handle(e)} id="loc_quad" value = {data.loc_quad} className="form-select form-select-lg mb-4" aria-label=".form-select-lg example">
        <option selected>Quad Location</option>
        <option value="East Quad">East Quad</option>
        <option value="West Quad">West Quad</option>
    </select>
     <select onChange={(e)=>handle(e)} id="loc_buiding" value = {data.buiding_loc} className="form-select form-select-lg mb-4" aria-label=".form-select-lg example">
        <option selected>Building Location</option>
        <option value="Boylan Hall">Boylan Hall</option>
        <option value="Chiller Plant">Chiller Plant</option>
        <option value="Ingersoll Hall">Ingersoll Hall</option>
         <option value="James Hall">James Hall</option>
          <option value="Library">Library</option>
        <option value="Roosevelt Hall">Roosevelt Hall</option>
        <option value="West End Building">West End Building</option>
        <option value="West Quad Building">West Quad Building</option>
        <option value="Whitehead Hall">Whitehead Hall</option>
        <option value="Whitman Hall">Whitman Hall</option>
    </select>
    <select onChange={(e)=>handle(e)} id="size" value = {data.size}
    className="form-select form-select-lg mb-4" aria-label=".form-select-lg example">
        <option selected>Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
    </select>
    <select onChange={(e)=>handle(e)} id="gender" value = {data.gender} className="form-select form-select-lg mb-4" aria-label=".form-select-lg example">
        <option selected>Gender</option> 
        <option value="M">M</option>
        <option value="F">F</option>
    </select>
    <button className="blue">UPDATE</button>
    </form>
    
    </div>
    </div>
    );
}

export default UpdateForm;