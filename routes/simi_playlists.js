// 获取推荐歌单

const express = require('express');
const app = express();
const Http = require('../util/request');

module.exports = (query, request) => {
    // console.log(query)
    const data = {
        songid: query.query.id,
        limit: query.query.limit || 50,
        offset: query.query.offset || 0
    };
    Http(
        'POST', `https://music.163.com/weapi/discovery/simiPlaylist`, data,
        {crypto: 'weapi', cookie: query.query.cookie, proxy: query.query.proxy}
    ).then(res => {
        request.json(res)
    }).catch( err => {
        request.json(err)
    })
};
