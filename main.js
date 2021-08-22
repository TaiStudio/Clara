

const axios = require('axios');

var channelId = process.env.CHANNELID,
    Key = process.env.YOUTUBEKEY;

const res = axios.get(`https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=2&key=${Key}`, {
    headers: {
        'Accept': 'application/json'
    }
}).then(response => {
    console.log(response.data['items'][0]['snippet']);
    console.log(response.data['items'][0]['snippet']['title']);
    console.log(response.data['items'][0]['snippet']['thumbnails']['standard']['url']);
  })   
 .catch((error) => {
    console.log('error ' + error);   
 });
