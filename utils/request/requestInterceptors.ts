import axios from "axios"
import handleError from "./handleError"

const handleRequestHeader = (config) => {
    config['secret'] = 'md5'
    return config
}

const handleAuth = (config) => {
    const token = '123'
    config.header['token'] = localStorage.getItem('token') || token || ''
    return config
}

axios.interceptors.request.use((config) => {
    config = handleRequestHeader(config)
    config = handleAuth(config)
    return config
}, (err) => {
     handleError.handleGeneralError(-1, err)
     Promise.reject(err)
})