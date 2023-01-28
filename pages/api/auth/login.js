import User from 'db/models/User'

// eslint-disable-next-line space-before-function-paren
export default async function loginHandler(req, res) {
  const { method, body } = req

  if (method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const { email, password } = body
  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos.' })
  }

  const userFound = await User.findOne({ email })

  if (!userFound) {
    return res.status(400).json({ message: 'Usuario no encontrado' })
  }

  const isPasswordValid = await User.comparePassword(password, userFound.password)

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Contraseña incorrecta' })
  }

  const token = userFound.generateToken()

  return res.status(200).json({ ...userFound._doc, token })
}
