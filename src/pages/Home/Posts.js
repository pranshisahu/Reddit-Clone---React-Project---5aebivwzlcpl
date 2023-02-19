import { Grid } from "@mui/material";
import Post from "./Post";

const Posts = (props) => {
  const { posts, onDeletePost } = props;

  return (
    <>
      <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
        {posts.map((post) => (
          <Grid item xs={12}>
            <Post
              key={post.id}
              id={post.id}
              body={post.body}
              createdBy={post.createdBy}
              onDeletePost={onDeletePost}
              post={post}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;

