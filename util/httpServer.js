/*
 * @Author: ecitlm
 * @Date:   2017-11-30 21:34:14
 * @Last Modified by: ecitlm
 * @Last Modified time: 2018-04-16 22:28:28
 */
let http = require('http')
const querystring = require('querystring')

/**
 * http get网络请求封装
 * @param {string} 域名
 * @param {obj} 参数
 * @param {string} 接口路径
 * @param {bool} true false 是否为https
 * @returns
 */
function httpGet (host, data, path, status) {
    console.log('===================HttpGet=====================')
    let options = {
        host: host,
        port: 80,
        path: path + querystring.stringify(data),
        method: 'GET',
        encoding: null,
        headers: {
            'Content-Type': 'application/json',
            'User-Agent':
                'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36'
        }
    }
    // 判断是否为https请求
    if (status) {
        http = require('https')
        options.port = 443
    }

    return new Promise(function (resolve, reject) {
        let body = ''
        let getReq = http.request(options, function (response) {
            // response.setEncoding('utf8');
            response.on('data', function (chunk) {
                body += chunk
            })

            response.on('end', () => {
                resolve(body)
            })

            response.on('error', err => {
                reject(err)
            })
        })
        getReq.end()
    })
}

/**
 * http ajaxget网络请求封装
 * @param {string} 域名
 * @param {obj} 参数
 * @param {string} 接口路径
 * @param {bool} true false 是否为https
 * @returns
 */
function ajaxGet (host, data, path, status) {
    console.log('===================HttpGet=====================')
    let options = {
        host: host,
        port: 80,
        path: path + querystring.stringify(data),
        method: 'GET',
        encoding: null,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Connection: 'keep-alive',
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'User-Agent':
                'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36'
        }
    }
    // 判断是否为https请求
    if (status) {
        http = require('https')
        options.port = 443
    }

    return new Promise(function (resolve, reject) {
        let body = ''
        let getReq = http.request(options, function (response) {
            // response.setEncoding('utf8');
            response.on('data', function (chunk) {
                body += chunk
            })

            response.on('end', () => {
                resolve(body)
            })

            response.on('error', err => {
                reject(err)
            })
        })
        getReq.end()
    })
}

/**
 * httpMobileGet  get网络请求封装
 * @param {string} 域名
 * @param {obj} 参数
 * @param {string} 接口路径
 * @param {bool} true false 是否为https
 * @returns
 */
function httpMobileGet (host, data, path, status) {
    console.log('===================httpMobileGet=====================')
    let options = {
        host: host,
        port: 80,
        path: path + querystring.stringify(data),
        method: 'GET',
        encoding: null,
        headers: {
            'Content-Type': 'application/json',
            'User-Agent':
                'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
        }
    }
    // 判断是否为https请求
    if (status) {
        http = require('https')
        options.port = 443
    }

    return new Promise(function (resolve, reject) {
        let body = ''
        let getReq = http.request(options, function (response) {
            // response.setEncoding('utf8');
            response.on('data', function (chunk) {
                body += chunk
            })

            response.on('end', () => {
                resolve(body)
            })

            response.on('error', err => {
                reject(err)
            })
        })
        getReq.end()
    })
}

/**
 * http POST 请求
 * @param {string} 域名
 * @param {obj} 参数
 * @param {string} 接口路径
 * @param {bool} true false 是否为https
 * @returns
 */
function httpPost (host, data, path, status) {
    data = querystring.stringify(data)
    console.log('---------httpPost---------------')
    console.log(data)
    let options = {
        host: host,
        port: '80',
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent':
                'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36',
            'Content-Length': Buffer.byteLength(data) // 返回字符串实际占据的字节长度
        }
    }
    // 判断是否为https请求
    if (status) {
        http = require('https')
        options.port = 443
    }
    return new Promise(function (resolve, reject) {
        let body = ''
        let postReq = http.request(options, function (response) {
            // console.log(response.statusCode);
            response.on('data', function (chunk) {
                body += chunk
            })

            response.on('end', () => {
                resolve(body)
            })

            response.on('error', err => {
                reject(err)
            })
        })

        postReq.write(data)
        postReq.end()
    })
}
function httpMusic (data, path, status) {
    data = querystring.stringify({
        'params': 'qOelzUABhK3CR99cqL9VlO3f9+lslITVi0c17B4GJeL4tGnxFaA2aGDwd3mxjldqBYdSRPBEaEWejKfTze02GA6uzeyQMxyEXizLtL9I15OtAnvxJDHoP0u3pcYNSKYi62VsSqtbdEYXGNva82oCAbSgp7GCcjCOsE+3NHp0TTMTyHbLyru1EpQcGgZ5QEewXZlHmnrc3JoTK8BWJIqrFQSG0cxwzpX52I9kD2TdrOMk6Zuf2HlI1zsTv6dGY3+9dQEd/GXh8M74RX/xzr4ZmOvwi/33tMxIWCUmvn6wCgMGAd0PyqCySFDluuiZVMoH',
        'encSecKey': '53447a0fefc42222a7661484c2cf4c7bf351f864ab3c439a45d684affacd4a2a0db8ced503e7d9703f325d31de0a137e06335bb77d8c85d1058177d3d64c3dd1c90de376dc420c1ee91e2adb8b57cc895718e838717be546a31bf0159a73ae95fa0d1c32a3dcd47259765e70dc50ba06784126439cbaef5da8e167724c1cb090'
    })
    console.log('---------httpMusic---------------')
    console.log(data)
    let options = {
        host: 'music.163.com',
        port: '80',
        path: path,
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Cookie': '_iuqxldmzr_=32; _ntes_nnid=0f2fa2e725869c52d8b6484983fd8821,1554197943288; _ntes_nuid=0f2fa2e725869c52d8b6484983fd8821; WM_TID=mDFjWoBMXclEQQERVAd8OXq%2B3FKmL9ND; __remember_me=true; JSESSIONID-WYYY=AuorJP4v9mVM%2F6b9kkabC2Qjl9G1RyuJKq%5C5VoHvyKbuB45rN9ct6p3w7d0HlNpuKQuQqK7vFWPOpDEbdQZdqSzFSfFpg9Wc3SN3b%2FsADA%2F4SgskWFCVNY%2FZKixKd%2BeCKJx320icJz9YkOFev%2Fkr2uuGDWoIqQgHxW7aWy4RV9WlyRbb%3A1554202109393; MUSIC_U=7101e0d60499e12ca31f21119ba8e0ab519f6b79db33eac3cad72445d2844dd778ef6094f88ee24e1bab909b154e16e331b299d667364ed3; __csrf=af24cd4383f1973b852c649edfc1b6ff',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36',
            'Origin': 'https://music.163.com'
        }
    }
    // 判断是否为https请求
    if (status) {
        http = require('https')
        options.port = 443
    }
    // console.log(options)
    return new Promise(function (resolve, reject) {
        let body = ''
        let postReq = http.request(options, function (response) {
            console.log(response);
            response.on('data', function (chunk) {
                body += chunk
            })

            response.on('end', () => {
                resolve(body)
            })

            response.on('error', err => {
                reject(err)
            })
        })

        postReq.write(data)
        postReq.end()
    })
}
module.exports = {
    httpGet,
    httpPost,
    httpMobileGet,
    ajaxGet,
    httpMusic
}
