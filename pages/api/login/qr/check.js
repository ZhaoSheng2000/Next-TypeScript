/*
 * @Author: Sam Zhao
 * @Date: 2023-02-11 13:01:59
 * @LastEditTime: 2023-02-11 13:13:44
 * @LastEditors: Sam Zhao
 * @Description: 二维码检测扫码状态接口
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */
import { login_qr_check } from 'NeteaseCloudMusicApi'

export default async function handler(req, res) {
    let { key } = req.query
    res.status(200).json(await login_qr_check({ key }))
}

