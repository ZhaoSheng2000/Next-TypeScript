import { banner } from 'NeteaseCloudMusicApi'
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
    name: object
  }


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    res.status(200).json({ name: await banner({type:0}) })
  }
