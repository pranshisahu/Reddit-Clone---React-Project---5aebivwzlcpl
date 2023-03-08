import React from 'react'
import PostItem from './PostItem'
import './Post.css'

function Posts() {
    
    const Posts = [
        {
            upvote:547,
            image:"https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Questions about new wallet",
            user: "theindependentonline",
            subreddit: "politics",
            comment_count: 284,
        },
        {
            upvote:27,
            image:"https://images.pexels.com/photos/2387661/pexels-photo-2387661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Amazing customer supports for child",
            user: "thepez",
            subreddit: "gaming",
            comment_count: 70,
        },
        {
            upvote:1064,
            image:"https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "i saw enola holmes (the movie) and now i want to read something similar to that",
            user: "cronaldo",
            subreddit: "soccer",
            comment_count: 60,
        },
        {
            upvote:980,
            image:"https://cdn.graciousquotes.com/wp-content/uploads/2021/05/Im-a-success-today-because-I-had-a-friend-who-believed-in-me-and-I-didnt-have-the-heart-to-let-him-down.-Abraham-Lincoln.jpg",
            title: "Jorge Jesus to Ruben Dias: You'are leaving a club that is much bigger ",
            user: "lionelandresmessi",
            subreddit: "nba",
            comment_count: 50,
        },
        {
            upvote:5452,
            image:"https://parade.com/.image/t_share/MTkzMDEwNDU3Mjc4MTYyNjQw/best-inspirational-quote.png",
            title: "TIFU by identifying the wine used in Cathlic Communion",
            user: "billTheGates",
            subreddit: "technology",
            comment_count: 284,
        },
       
           
        
    ]
    
    return (
        <div className='posts'>
            {Posts.map(post => (
                <PostItem post={post} />
            ))}
        </div>
    )
}
export default Posts;
