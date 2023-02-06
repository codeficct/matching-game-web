import User from 'db/models/User'
import { dbConnect } from '../../../db'
dbConnect()
// eslint-disable-next-line space-before-function-paren
export default async function handler(req, res) {
  const { method } = req
  switch (method) {
    case 'GET': {
      const users = await User.find({}).select('name email score photo').sort({ score: -1 })
      return res.status(200).json(users)
    }
    case 'POST':
    case 'PUT':
    case 'DELETE': {
      await User.deleteMany({})
      return res.status(204).json({ message: 'Users deleted' })
    }
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}
