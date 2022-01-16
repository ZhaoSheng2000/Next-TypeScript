import { login_qr_create } from 'NeteaseCloudMusicApi'
export default async function handler(req, res) {
  const { key } = req.query
  let img = await login_qr_create({ "key": key, "qrimg": 'true' })
  img = img.body.data.qrimg
  res.json(img)
}
