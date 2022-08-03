import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String }
})

export default mongoose.model('User', userSchema)

// import mongoose from 'mongoose'

// const postSchema = mongoose.Schema({
//   title: String,
//   message: String,
//   creator: String,
//   tags: [String],
//   selectedFile: String,
//   likeCount: {
//     type: Number,
//     default: 0
//   },
//   createdAt: {
//     type: Date,
//     default: new Date()
//   }
// })

// const PostMessage = mongoose.model('PostMessage', postSchema)

// export default PostMessage
