import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const LoginBtn = () => {
    // navigate handler
    const navigate = useNavigate();
    // get dispatch function 
    const dispatch = useDispatch();

    const auth = localStorage.getItem('user');

    // logout button handler
    const logOutHandler = () => {
        localStorage.removeItem('user');
        dispatch({ type: "ADD_TO_CART_DATA", payload: { data: [] } });
        navigate('/login')
    }

    return (
        <ul className='navbar-nav me-3'>
            {!(auth) ?
                <>
                    <li>
                        <Link
                            className='nav-link active nav-login-btn d-inline-block me-3 my-2 rounded' to='login'>LogIn
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='nav-link active nav-login-btn d-inline-block my-2 rounded' to='signin'>SignIn
                        </Link>
                    </li>
                </>
                :
                <li id='perso-icon'>
                    <i className="bi bi-person-fill text-light h4 mt-4"></i>
                    <span
                        className='nav-link active d-inline-block my-2'>
                        <span className='me-3'>( {JSON.parse(auth).firstName} )</span>
                    </span>
                    <span
                        onClick={logOutHandler}
                        className='btn btn-sm btn-danger'>
                        LogOut
                    </span>
                </li>
            }
        </ul>
    )
}

export default LoginBtn