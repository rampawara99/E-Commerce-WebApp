import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
    const state = useSelector((data)=> data);
    console.log("home: ", state);
    return (
        <div>Home</div>
    )
}

export default Home