// 获取推荐歌单

const express = require('express');
const app = express();
const Http = require('../util/request');

module.exports = (query, request) => {
    // console.log(query)
    const data = {
        type: 1111
    };
    Http(
        'POST', `https://music.163.com/weapi/search/hot`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    ).then(res => {
        request.json(res)
    }).catch( err => {
        request.json(err)
    })
};
