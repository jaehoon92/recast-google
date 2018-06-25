'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const recastai = require('recastai');
const request = require('superagent');
const BOT_ID = 'pm-bot'
const {SERVER_PORT, BOT_KEY1, BOT_KEY2} = require('./config.js');

const app = express();

app.use(bodyParser.json());

// request
//   .get(`https://api.recast.ai/connect/v1/connectors/${BOT_ID}`)
//   .send()
//   .set('Authorization', BOT_KEY2)
//   .end((err, res) => console.log(res.text));
//
//
// request
//   .post('https://api.recast.ai/connect/v1/channels')
//   .send({
//     isActivated: true,
//     slug: 'first-channel',
//     type: 'recastwebchat',
//   })
//   .set('Authorization', BOT_KEY2)
//   .end((err, res) => console.log(res.text));





app.post('/api/google4Recast', (req, res) => {
	console.log('[POST] /api/google4Recast');
  console.log(req);

  const build = new recastai.build(BOT_KEY1, 'ko')

  build.dialog({ type: 'text', content: '안녕하세요'}, { conversationId: '001' })
    .then(function(result) {
      console.log(result)
      return res.json('안녕');
    })
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on ${SERVER_PORT} port`);
});
