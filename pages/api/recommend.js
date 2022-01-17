import { recommend_resource } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
    res.json(await recommend_resource({}))
}
