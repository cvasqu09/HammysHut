const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/post');

router.get('/', function(req, res, next) {
  Post.find(function(err, posts) {
    if(err){
      return res.status(500).json({
        title: '500 Internal Server Error',
        message: 'Error occurred while retrieving posts'
      });
    }
    return res.status(200).json(posts);
  });
});

router.post('/', function (req, res, next) {
  var post = new Post(req.body);
  // Search for the users in the users collection for validation

  Post.save(function(err, result) {
    if(err) {
      return res.status(500).json({
        title: '500 Internal Server Error',
        error: err,
        message: 'Internal Server Error'
      });
    }

    res.status(201).json(result);
  })
});

module.exports = router;
