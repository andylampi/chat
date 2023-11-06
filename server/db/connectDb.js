import mongoose from "mongoose"
import User from "./models/User.js"

const connectDb = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/chat")
        console.log("connected db")
    } catch (error) {
        console.error(error)
    }
}

export default connectDb