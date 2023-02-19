import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";
  import { posts as postsCollectionName } from "../../shared/constants/firebase-collection";
  import { db } from "./initialize";
  
  const getPostsCollection = () => {
    return collection(db, postsCollectionName);
  };
  
  export const getPosts = async () => {
    const querySnapshot = await getDocs(getPostsCollection());
  
    let posts = [];
  
    querySnapshot.forEach((doc) => {
      posts.push({
        ...doc.data(),
        id: doc.id,
      });
    });
  
    return posts;
  };
  
  export const addPost = async (body, createdBy) => {
    const addedPost = await addDoc(getPostsCollection(), {
      body,
      like: 0,
      dislike: 0,
      createdBy,
    });
    return addedPost;
  };
  
  export const updatePost = async (body, like, dislike, id) => {
    await updateDoc(doc(db, postsCollectionName, id), {
      body,
      like,
      dislike,
    });
  };
  
  export const likeDislike = async (like, dislike, id) => {
    await updateDoc(doc(db, postsCollectionName, id), {
      like,
      dislike,
    });
  };
  
  export const deletePost = async (id) => {
    const docToBeDeleted = doc(db, postsCollectionName, id);
    await deleteDoc(docToBeDeleted);
  };
  