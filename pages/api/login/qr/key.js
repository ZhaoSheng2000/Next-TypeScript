/*
 * @Author: Sam Zhao
 * @Date: 2023-02-11 11:56:22
 * @LastEditTime: 2023-02-11 12:58:16
 * @LastEditors: Sam Zhao
 * @Description: 二维码 key 生成接口
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */
import { login_qr_key } from 'NeteaseCloudMusicApi'


export default async function handler(req, res) {
    res.status(200).json(await login_qr_key({}))
}

