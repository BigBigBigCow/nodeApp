// 获取最新音乐

const express = require('express');
const app = express();
const Http = require('../util/request');

module.exports = (query, request) => {
    // console.log(query)
    const data = {
        type: "recommend"
    };
    Http(
        'POST', `https://music.163.com/weapi/personalized/newsong`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    ).then(res => {
        let item = [];
        let data = res.body.result;
        // console.log(data[0]);
        for(let i = 0; i<data.length; i++){
            let author = '';
            for(let j = 1;j<data[i].song.artists.length;j++){
                author = author+'/'+data[i].song.artists[j].name
            }
            item.push({
                pic:data[i].song.album.picUrl,
                songId:data[i].id,
                title:data[i].name,
                playUrl:`http://music.163.com/song/media/outer/url?id=${data[i].id}.mp3`,
                author: data[i].song.artists[0].name+author,
                special:data[i].song.album.name,
                specialId:data[i].song.album.id,
                duration:data[i].song.duration,
                mvid:data[i].song.mvid,
            })
        }
        res.body.result = item;
        // console.log(item);
        request.json(res)
    }).catch( err => {
        request.json(err)
    })
};
