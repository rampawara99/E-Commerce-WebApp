import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const LoginBtn = () => {
    // navigate handler
    const navigate = useNavigate();

    const auth = localStorage.getItem('user');

    // logout button handler
    const logOutHandler = () => {
        localStorage.removeItem('user');
        navigate('/login')
    }


    return (
        <ul className='navbar-nav me-3'>
            {!(auth) ?
                <>
                    <li>
                        <Link
                            className='nav-link active nav-login-btn d-inline-block bg-danger me-3 my-2' to='login'>Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='nav-link active nav-login-btn d-inline-block bg-danger my-2' to='signin'>SignIn
                        </Link>
                    </li>
                </>
                :
                <li>
                    <span
                        className='nav-link active d-inline-block my-2'>
                        <span className='me-3'>( {JSON.parse(auth).firstName} )</span>
                        <span
                            onClick={logOutHandler}
                            className='btn btn-sm btn-danger'>
                            LogOut
                        </span>
                    </span>
                </li>
            }
        </ul>
    )
}

export default LoginBtn