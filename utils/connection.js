require('dotenv').config()
import mongoose from "mongoose";

console.log(typeof process.env.MONGO_URI)
console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection
    .on("open", () => console.log("Connected to Mongo"))
    .on("error", (error) => console.log(error))

const postSchema = new mongoose.Schema({
    title: String,
    text: String,
    img: String
}, {timestamps: true})

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema)