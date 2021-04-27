import axios from 'axios'
import visAuth from '../config/visAuth'

let get = (url) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url,
            auth: visAuth,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            reject(error)
        })
    })
}

let post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data: JSON.stringify(data),
            auth: visAuth,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            reject(error)
        })
    })
}


export default { get, post }
