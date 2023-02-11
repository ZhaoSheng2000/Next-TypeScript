/*
 * @Author: Sam Zhao
 * @Date: 2023-02-11 12:59:16
 * @LastEditTime: 2023-02-11 13:30:31
 * @LastEditors: Sam Zhao
 * @Description: 二维码生成接口
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */
import { login_qr_create } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
    let { key } = req.query
    res.status(200).json(await login_qr_create({ key, qrimg: true, timestamp: Date.now() }))

}

