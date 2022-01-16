import { login_qr_key } from 'NeteaseCloudMusicApi'


// type Data = {
//     res: object
//   }


export default async function handler(
  req,
  res
) {
  res.json(await await login_qr_key({}))
}
