import Axios from 'axios'
import qs from 'qs'
import {notification} from "@/utils/notification/notification"

// 创建 axios 实例
const service = Axios.create({
    baseURL: '/lg' // api base_url
    // timeout: 6000 // 请求超时时间
});

export const post = (url, data = {}, showMsg = true) => service.post(url, qs.stringify(data)).then(res => {
    const data = res.data.resMsg
    showMsg && notification({
        title: data.resDesc
    });
    return data
})
