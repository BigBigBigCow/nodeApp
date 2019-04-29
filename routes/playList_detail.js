// 获取推荐歌单

// const express = require('express');
// const app = express();
const Http = require('../util/request');

module.exports = (query, request) => {
    // console.log(query)
    const data = {
        id: query.query.id,
        n: 100000,
        s: query.s || 8
    };
    Http(
        'POST', `https://music.163.com/weapi/v3/playlist/detail`, data,
        {crypto: 'linuxapi', cookie: query.cookie, proxy: query.proxy}
    ).then(res => {
        request.json(res)
    }).catch( err => {
        request.json(err)
    })
};
