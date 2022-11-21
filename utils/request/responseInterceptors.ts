import axios from "axios"

axios.interceptors.response.use(
    (response) => {
        if (response.status !== 200) return Promise.reject(response.data)

        handleAuthError(response.data.errno)
        handleGeneralError(response.data.errno, response.data.errmsg)

        return response
    },
    (err) => {
        handleNetworkError(err.response.status)
        Promise.reject(err.response)
    }
)