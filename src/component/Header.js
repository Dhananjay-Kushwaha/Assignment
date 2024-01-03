import React from 'react'
import '../css/header.css'
import { LuSettings2 } from "react-icons/lu";



function Header() {
    return (
        <div className='container'>
            <div className='selectOption'>
                    <LuSettings2/>
                <select id="mySelect">
                    <option value="option1">Display </option>
                    <option value="option2">Grouping</option>
                    <option value="option3">Ordering</option>
                </select>
            </div>
        </div>
    )
}

export default Header
