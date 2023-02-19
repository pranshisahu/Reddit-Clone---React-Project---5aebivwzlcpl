import {
    Button,
    Card,
    CardActions,
    CardContent,
    Tooltip,
    Typography,
    CardHeader,
    Avatar,
  } from "@mui/material";
  import { red } from "@mui/material/colors";
  
  import { useSelector } from "react-redux";
  import DeleteIcon from '@mui/icons-material/Delete';
  import {
    deletePost,
    likeDislike,
  } from "../../services/firebase/post";
  import { getUser } from "../../services/firebase/user";
  import { useEffect, useState } from "react";
  import ThumbUpIcon from '@mui/icons-material/ThumbUp';
  import ThumbDownIcon from '@mui/icons-material/ThumbDown';
  
  const Post = (props) => {
    const { body, id, createdBy, onDeletePost, post } = props;
  
    const [postOwnerInfo, setPostOwnerInfo] = useState({
      firstName: "",
      lastName: "",
      id: null,
    });
  
    const auth = useSelector((state) => state.auth);
  
    useEffect(() => {
      const fetchUser = async () => {
        const user = await getUser(createdBy);
        setPostOwnerInfo(user);
      };
  
      fetchUser();
    }, [createdBy]);
  
    const handleDeleteClick = async () => {
      await deletePost(id);
      onDeletePost();
    };
  
    const likePost = async () => {
      await likeDislike(post.like + 1, post.dislike, id);
      onDeletePost();
    };
  
    const disLikePost = async () => {
      await likeDislike(post.like, post.dislike + 1, id);
      onDeletePost();
    };
  
    return (
      <div>
        <Card sx={{ minWidth: 275, bgcolor: '#00b8e6'}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {postOwnerInfo?.firstName[0]}
              </Avatar>
            }
            title={`${postOwnerInfo.firstName} ${postOwnerInfo.lastName}`}
          />
          <CardContent>
            <Typography variant="body2">{body}</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            {createdBy === auth.userId && (
              <Tooltip title="Delete">
                <Button size="small" color="error" onClick={handleDeleteClick}>
                  <DeleteIcon />
                </Button>
              </Tooltip>
            )}
            <Button startIcon={<ThumbUpIcon />} onClick={likePost}>
              {post.like}
            </Button>
            <Button startIcon={<ThumbDownIcon />} color="secondary" onClick={disLikePost}
            >
              {post.dislike}
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  };
  
  export default Post;