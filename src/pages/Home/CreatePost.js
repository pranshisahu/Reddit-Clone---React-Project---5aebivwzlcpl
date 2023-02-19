import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../../services/firebase/post";

const CreatePost = (props) => {
  const { onPostCreate } = props;

  const [postInputValue, setPostInputValue] = useState("");

  const auth = useSelector((state) => state.auth);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (postInputValue === "") {
      return;
    }

    try {
      await addPost(postInputValue, auth.userId);
      setPostInputValue("");
      onPostCreate();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      {auth.userId && auth.isInitialized && (
        <form onSubmit={onFormSubmit}>
          <Grid
            container
            // justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ my: 1 }}
          >
            <Grid item xs={12} sm={11}>
              <TextField
                sx={{ bgcolor: '#FEFEFE', borderRadius: 1 }}
                label="Enter your post"
                fullWidth
                value={postInputValue}
                onChange={(event) => setPostInputValue(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <Button variant="contained" fullWidth type="submit">
                POST
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  );
};

export default CreatePost;
