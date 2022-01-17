import { login_qr_key } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
  res.json(await login_qr_key({}))
}
