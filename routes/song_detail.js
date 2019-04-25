// 获取推荐歌单

const express = require('express');
const app = express();
const Http = require('../util/request');

module.exports = (query, request) => {
    // console.log(query)
    query.query.ids = query.query.ids.split(/\s*,\s*/)
    const data = {
        c: '[' + query.query.ids.map(id => ('{"id":' + id + '}')).join(',') + ']',
        ids: '[' + query.query.ids.join(',') + ']'
    };
    Http(
        'POST', `https://music.163.com/weapi/v3/song/detail`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    ).then(res => {
        request.json(res)
    }).catch( err => {
        request.json(err)
    })
};
