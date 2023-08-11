import React, { useEffect, useState } from 'react'
import ReUsable from './ReUsable';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Ladies = () => {

    // create state variable 
    const [data, setData] = useState([]);
    // get API request function
    const getResult = async (url) => {
        try {
            const resp = await axios.get(url);
            setData(resp.data);

        } catch (err) {
            console.log(err);
            alert(err);
        }
    }

    useEffect(() => {
        getResult("http://localhost:5000/category-limited/Ladies");
    }, []);

    return (
        <div className="container my-5">
            <h1 className='text-center h3'>LADIES CATEGORY</h1>
            <div className='my-5 d-flex justify-content-center justify-content-sm-between flex-wrap'>
                {data.length > 0 &&
                    data.map((item, ind) => (
                        <ReUsable key={ind} data={item} />
                    ))}
            </div>
            <div className='text-end pb-3 border-bottom'>
                <Link to='/shop' className='fw-bolder text-primary cursor-pointer'>See more</Link>
            </div>
        </div>
    )
}

export default Ladies