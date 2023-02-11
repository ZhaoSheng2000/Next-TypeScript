/*
 * @Author: Sam Zhao
 * @Date: 2023-02-11 13:57:13
 * @LastEditTime: 2023-02-11 13:57:25
 * @LastEditors: Sam Zhao
 * @Description: 推荐歌单
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */
import { personalized } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
    let cookie = req.cookies
    res.json(await personalized({}))
}