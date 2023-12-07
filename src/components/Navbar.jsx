
import React from 'react'
import '../styles/components/navbar.scss'
import { VscMenu } from "react-icons/vsc";
function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <h3>johnbassey</h3>
                <VscMenu />
            </div>
        </div>
    )
}

export default Navbar
