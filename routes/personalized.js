// 获取推荐歌单

const express = require('express');
const app = express();
const Http = require('../util/request');

module.exports = (query, request) => {
    // console.log(query)
    const data = {
        limit: query.query.limit || 30,
        offset: query.query.limit || 0,
        total: true,
        n: 1000
    };
    Http(
        'POST', `https://music.163.com/weapi/personalized/playlist`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    ).then(res => {
        request.json(res)
    }).catch( err => {
        request.json(err)
    })
};
