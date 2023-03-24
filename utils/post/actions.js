import { Post } from "./connection";

// get all posts
export const getPosts = async () => await Post.find({})
 
// get a single post
export const getPost = async (id) => await Post.findById(id)

// create a new post
export const createPost = async (newPost) => await Post.create(newPost)

// update a post
export const updatePost = async (id, updatedPost) => await Post.findByIdAndUpdate(id, updatedPost, {new: true})

// delete a post
export const deletePost = async (id) => await Post.findByIdAndDelete(id)