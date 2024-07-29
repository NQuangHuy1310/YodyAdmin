import axios from 'axios'
import { base_url } from '../constants/common'

const axiosConfig = axios.create({
    baseURL: base_url
})

axiosConfig.interceptors.request.use((config) => {
    const token = localStorage.getItem('user_data') ? JSON.parse(localStorage.getItem('user_data')).token : ''

    if (token !== '') {
        const auth = `Bearer ${token}`
        config.headers.Authorization = auth
    }
    config.headers.Accept = 'application/json'

    return config
})

axiosConfig.interceptors.response.use()

export default axiosConfig
