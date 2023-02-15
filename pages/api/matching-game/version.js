import { dbConnect } from "db";
import Version from "db/models/Version";
dbConnect()

export default async function versionHandler(req, res) {
  const { method } = req
  if (method === "PUT") {
    const { AppName, AppVersion, Developer, Title, Description } = req.body
    if (!AppName || !AppVersion || !Developer || !Title || !Description) {
      return res.status(400).json({ message: 'AppName, AppVersion, Developer, Title y Description son requeridos.' })
    }
    try {
      const findVersion = await Version.findOne({ AppName })
      if (findVersion) {
        await Version.findOneAndUpdate({ AppName }, req.body, { new: true, runValidators: true })
        return res.status(200).json({ message: 'La versión ha sido actualizada correctamente.' })
      } else {
        const version = new Version(req.body)
        await version.save()
        return res.status(201).json({ message: 'La versión ha sido creada correctamente.' })
      }
    } catch (error) {
      return res.status(400).json({ message: 'Error al actualizar la versión de la app.', error: error.message })
    }
  } else if (method === "GET") {
    const version = await Version.find();
    if (version.length === 0) return res.status(204).json({ message: 'No se encontró ninguna versión.' })
    return res.status(200).json(version)
  } else {
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
