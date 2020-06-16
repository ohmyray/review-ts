import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config // 拿到传入的配置与数据
  const request = new XMLHttpRequest() // 获取请求对象
  request.open(method.toUpperCase(), url, true) // 统一方法名的大小写，传入url
  request.send(data) // 发送数据
}
