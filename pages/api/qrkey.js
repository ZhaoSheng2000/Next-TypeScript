import { login_qr_key } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
    let cookie = req.cookies
    let result = await login_qr_key({})
    res.json({ 'result': result.body.data.unikey, 'cookie': cookie })
}
