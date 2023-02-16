import { dbConnect } from 'db'
import User from 'db/models/User'

dbConnect()

// eslint-disable-next-line space-before-function-paren
export default async function handlerUserId(req, res) {
  const { method, query: { id }, body } = req

  switch (method) {
    case 'GET': {
      const users = await User.findById(id).select('name email score photo maxLevel').sort({ score: -1 })
      return res.status(200).json(users)
    }
    case 'PUT': {
      try {
        const user = await User.findByIdAndUpdate(id,
          { $inc: { score: body.score }, $set: { maxLevel: body.maxLevel } },
          { new: true, runValidators: true })

        if (!user) return res.status(400).json({ message: 'Usuario no encontrado.' })
        return res.status(200).json(user)
      } catch (error) {
        return res.status(400).json({ message: 'Error al actualizar el usuario.', error: error.message })
      }
    }
    default:
      return res.status(405).end(`Método ${method} no permitido`)
  }
}
