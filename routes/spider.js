// 搜索

const express = require('express')
const app = express()
const Http = require('../util/request')

module.exports = (query, request) => {
    const data = {
        s: query.query.name,
        type: query.query.type || 1, // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
        limit: query.query.limit || 30,
        offset: query.query.offset || 0
    };
    Http(
        'POST', `https://music.163.com/weapi/cloudsearch/get/web`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    ).then(res => {
        let item = [];
        let data = res.body.result.songs;
        // console.log(res);
        if( res.body.result.songCount < 1){
            request.json(res);
            return;
        }
        for(let i = 0; i<data.length; i++){
            let author = '';
            for(let j = 1;j<data[i].ar.length;j++){
                author = author+'/'+data[i].ar[j].name
            }
            item.push({
                pic:data[i].al.picUrl,
                songId:data[i].id,
                title:data[i].name,
                playUrl:`http://music.163.com/song/media/outer/url?id=${data[i].id}.mp3`,
                author: data[i].ar[0].name+author,
                special:data[i].al.name,
                specialId:data[i].al.id,
                duration:data[i].dt,
                mvid:data[i].mvid,
            })
        }
        res.body.result.songs = item;
        request.json(res)
    }).catch( err => {

        request.json(err)
    })
}
