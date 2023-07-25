import React from 'react'
import CartIcon from './CartIcon'
import LoginBtn from './LoginBtn'
import NaveBtns from './NaveBtns'
import CollapBtn from './CollapBtn'
import Logo from './Logo'
import AlertMessage from './AlertMessage'

const Nav = () => {
    return (
        <>
            <AlertMessage/>
            <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
                <div className="container position-relative">
                    <div className="d-flex">
                        <Logo />
                        <CartIcon />
                    </div>
                    <CollapBtn />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NaveBtns />
                        <LoginBtn />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav