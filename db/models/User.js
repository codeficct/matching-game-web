import { Schema, model, models } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
  score: {
    type: Number,
    required: true,
    default: 0
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true })

userSchema.methods.encryptPassword = async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
}

userSchema.statics.comparePassword = async function (password, hash) {
  return await bcrypt.compare(password, hash)
}

userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET)
}

export default models.User || model('User', userSchema)
