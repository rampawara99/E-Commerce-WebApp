import React from 'react'
import { useLocation } from 'react-router-dom'
import NavigationBtns from './buttons/NavigationBtns'; 

const NaveBtns = () => {
    // When the user will click on navigation btn then text color will change as well underline
    const { pathname } = useLocation();

    const local = localStorage.getItem('user');
    let auth = {};
    if(local){
        auth = JSON.parse(local);
    } 

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavigationBtns name="Home" link="/" pathname={pathname} />
            <NavigationBtns name="Products" link="/shop" pathname={pathname} />
            {auth.user === "seller" && <>
                <NavigationBtns name="Add-Product" link="/addproduct" pathname={pathname} /> 
                <NavigationBtns name="My Products" link="/sellerproducts" pathname={pathname} />
            </> 
            }
        </ul>
    )
}

export default NaveBtns