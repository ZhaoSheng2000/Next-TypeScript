import { login_qr_key } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
    let result = await login_qr_key({})
    res.json(result.body.data.unikey)
}
