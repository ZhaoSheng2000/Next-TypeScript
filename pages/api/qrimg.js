import { login_qr_key, login_qr_create } from 'NeteaseCloudMusicApi'
export default async function handler(
  req,
  res
) {
  let key = await login_qr_key({})
  key = key.body.data.unikey
  let img = await login_qr_create({ "key": key, "qrimg": 'true' })
  img = img.body.data.qrimg
  res.json(img)
}
