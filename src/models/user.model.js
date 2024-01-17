import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    
  },
  fullname: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: true,
    
  },
  avtar: {
    type: String,
    required: true,
  },
  coverImage:{
     type: String
  },
  watchHistory: [
    {
        type: Schema.Types.ObjectId,
        ref: "Video"
    }
  ],
  passowrd:{
    type: String,
    required: [true, "Password Is required"]
  },
  refershToken: {
    type: String,
  }
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)