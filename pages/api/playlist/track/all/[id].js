/*
 * @Author: Sam Zhao
 * @Date: 2023-02-11 11:42:33
 * @LastEditTime: 2023-02-11 11:56:39
 * @LastEditors: Sam Zhao
 * @Description: 获取歌单所有歌曲
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */
import { playlist_track_all } from 'NeteaseCloudMusicApi'


export default async function handler(req, res) {
    let { id } = req.query
    res.status(200).json(await playlist_track_all({ id, limit: 30, offset: 1 }))
}
