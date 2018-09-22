/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const axios = require('axios');

const postAPI = 'https://jsonplaceholder.typicode.com';

// Get Post

router.get('/', (req, res) => {
    res.send('it works');
});
router.get('/posts', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
    //console.log(posts.data);
    res.status(200).json(posts.data);

  })
  .catch(error => {
    res.status(500).send(error);
  });
});

module.exports = router;
