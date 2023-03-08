import React from 'react'
import './Header.css'


function Header() {
    

    return (
        <div className='header'>
            <div className='header_left'>
                <ul>
                    <li><a href="/r/popular" class="active">Popular</a></li>
                    <li><a href="/r/hot">Hot</a></li>
                    <li><a href="/r/rising">Rising</a></li>
                    <li><a href="/r/controversial">controversial</a></li>
                    <li><a href="/r/gilded">Gilded</a></li>
                </ul>
            </div>
            <div className='header_right'>
                <i className='fas fa-bell'></i>
                <img src='' />
                <div className='header_user'>
                <span>Pranshi sahu</span>
                     <i className='fas fa-caret-down'></i>
                    
             
                </div>
            </div>
        </div>
    )
}
export default Header;
