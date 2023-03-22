import React,{useState} from 'react'
import './PostItem.css'
import { useAuth0 } from "@auth0/auth0-react";
function PostItem(props) {
  const {title, upvote, image, user, subreddit, comment_count} = props.post;
  const { isAuthenticated } = useAuth0();
  const [like,setLike]=useState(false);
  const [dislike, setDislike]=useState(false);
 const [vote,setVote]=useState(upvote);
   
     
    const upClicked=()=>{
       setVote(vote+1);
       setLike(true);
       setDislike(false);
    }
    const downClicked=()=>{
     if(vote <= 0){
      setDislike(true);
      setLike(false);
     }
     else{
      setVote(vote-1);
      setDislike(true);
      setLike(false);
     }
  }
  return (
    <div className="post">
       <div className="post__left">
       <button className='up' onClick={upClicked} disabled={like || !isAuthenticated}><i className="fas fa-caret-up"></i> </button>
        <span>{vote}</span>
        <button className='up' onClick={downClicked} disabled={dislike || !isAuthenticated}>  <i className="fas fa-caret-down"></i></button>
       </div>
       <div className="post__center">
          <img src={image} alt="img"/>
       </div>
       <div className="post__right">
         <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
         <span className="post__info">
            submitted an hour ago by
           {" "}<a href={`/u/${user}`}>{user}</a>{" "}
            to 
           {" "}<a href={`/r/${subreddit}`}>{subreddit}</a>
         </span>
         <p className="post__info">
            {comment_count} comments | share | save | hide | report
         </p>
       </div>
    </div>
  )
}

export default PostItem

