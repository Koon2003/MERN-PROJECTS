const express = require('express');
const app = express();
const cors = require('cors')
const BlogPosts = require('./model/BlogPosts');

app.use(cors());

app.get('/posts', (req, res) => {
    res.json(BlogPosts);
});

app.get('/posts/:slug', (req, res) => {
    const {slug} = req.params;
    res.json(BlogPosts[slug]);
});

app.listen(8080);