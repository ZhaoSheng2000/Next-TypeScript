// 新歌速递
import { top_song } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
  res.status(200).json(await top_song({ type: 0 }))
}
