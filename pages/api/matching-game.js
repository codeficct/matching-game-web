// eslint-disable-next-line space-before-function-paren
export default async function handler(req, res) {
  const { name } = req.query
  const { method } = req
  switch (method) {
    case 'GET':
      console.log(method)
      return res.status(200).json(`Hello ${name}!`)
    case 'POST':
    case 'PUT':
    case 'DELETE':
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}
