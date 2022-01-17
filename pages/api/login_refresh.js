import { login_refresh } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
    res.json(await login_refresh())
}
