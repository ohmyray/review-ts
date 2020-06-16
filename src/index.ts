import { AxiosRequestConfig } from './types/index';
// 入口函数
function axios(config: AxiosRequestConfig) {
  console.log(config)
}

export default axios