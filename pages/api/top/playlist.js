/*
 * @Author: Sam Zhao
 * @Date: 2023-02-05 18:23:09
 * @LastEditTime: 2023-02-05 18:26:32
 * @LastEditors: Sam Zhao
 * @Description: 
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */
import { top_playlist } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
    let cookie = req.cookies
    res.json(await top_playlist({}))
}
