import React, { useState, useEffect } from 'react';

const Dashboard = (props) => {
    const [msg, setMsg] = useState("Loading");
    
    useEffect(()=>{
        fetch("http://localhost:4000/test")
        .then(res => res.json())
        .then(data => setMsg(data.msg))
        .catch(err => console.log("error occured:", err));
    }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{msg}</p>
        </div>
    )
}


export default Dashboard;