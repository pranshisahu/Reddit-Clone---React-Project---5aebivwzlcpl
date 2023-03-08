import React from 'react'
import Header from './Header'
import Posts from './Posts'
import './Main.css'

function Main() {
    return(
        <div className='main'>
            <Header />
            <Posts/>
        </div>
    )
}

export default Main;
