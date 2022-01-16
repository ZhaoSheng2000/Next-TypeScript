import { login_qr_check } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
    const { key } = req.query
    res.json(await await login_qr_check({ "key": key }))
}
