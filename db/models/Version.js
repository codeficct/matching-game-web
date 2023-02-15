import { Schema, model, models } from 'mongoose'

const versionSchema = new Schema({
  AppName: {
    type: String,
    required: true,
    trim: true
  },
  AppVersion: {
    type: String,
    required: true,
    trim: true
  },
  Developer: {
    type: String,
    required: true,
    trim: true
  },
  Title: {
    type: String,
    required: true,
    trim: true
  },
  Description: {
    type: String,
    required: true,
    trim: true
  },
}, { timestamps: true })

export default models.Version || model('Version', versionSchema)
