import React from 'react'
import './SideNav.css'

function SideNav() {
    const menus = [
        { to: '/r/popular' , text: "Popular"},
        { to: '/r/all' , text: "All"},
        { to: '/r/random' , text: "Random"}
    ]
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifts",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful",
    ]
    return (
        <div className='sidenav'>
            <div className='sidenav_logo' >
               <img src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg"/>
            </div>
            <div className='sidenav_search' >
                <input type="text" name="search" placeholder='Search' />
                <i className='fas fa-search'></i>
            </div>
            <div className='sidenav_links' >
                <ul class='sidenav_menu'>
                    {menus.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <hr/>
                <ul className='sideNav_subreddit'>
                    {subreddits.map(subreddit => (
                        <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default SideNav;

