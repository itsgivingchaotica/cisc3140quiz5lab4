import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import '../GetAll.css';

const GetAll = () => {
    const [entries, setData] = useState({ sightings: []})

useEffect(() => {
    const fetchData =  () => {
        const { data } = axios(`http://localhost:8080/squirrels`)

        setData({ fields : data })
        console.log(data)
    }
    fetchData()
}, [setData])


    return (
        <div className="GetAll">
            <header className="header">
                <h1>All Data</h1>
            </header>
            <Table bordered hover>
                <thead className='tablehead'>
                    <tr>
                        <th>Squirrel ID</th>
                        <th>Age</th>
                        <th>Color</th>
                        <th>Active Time</th>
                        <th>Quad Location</th>
                        <th>Building Location</th>
                        <th>Size</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                {
                    entries.fields && entries.fields.map((item) => (
                        <tr key={item.squirrel_id}>
                        <td>{item.squirrel_id}</td>
                        <td>{item.age}</td>
                        <td>{item.color}</td>
                        <td>{item.active_time}</td>
                        <td>{item.loc_quad}</td>
                        <td>{item.loc_buiding}</td>
                        <td>{item.size}</td>
                        <td>{item.gender}</td>
                    </tr>
                    )) 
                }
                </tbody>
            </Table>
        </div>
    )
}
export default GetAll;