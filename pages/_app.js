/*
 * @Author: Sam Zhao
 * @Date: 2022-01-15 15:46:30
 * @LastEditTime: 2023-02-11 13:03:24
 * @LastEditors: Sam Zhao
 * @Description: 
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */
import '../styles/globals.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.withCredentials = true; //cookie
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
