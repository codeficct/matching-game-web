import User from 'db/models/User'
import { dbConnect } from 'db'
import { serialize } from 'cookie'
dbConnect()

// eslint-disable-next-line space-before-function-paren
export default async function registerHandler(req, res) {
  const { method, body } = req
  if (method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido.' })
  }

  const { name, email, password, confirmPassword } = body

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Nombre, email y contraseña son requeridos.' })
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Las contraseñas no coinciden.' })
  }

  try {
    const userFound = await User.findOne({ email })
    if (userFound) {
      return res.status(400).json({ message: 'El email ya está registrado.' })
    }

    const user = new User({
      name, email, password
    })

    await user.encryptPassword()
    await user.save()

    const token = user.generateToken()

    const serialized = serialize('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })

    res.setHeader('Set-Cookie', serialized)
    return res.status(201).json({
      message: 'Usuario creado correctamente.'
    })
  } catch (error) {
    console.warn(error.message)
    return res.status(500).json({ message: 'Error al crear el usuario.', error: error.message })
  }
}
