const express = require('express');
const path = require('path');
const router = express.Router();
const blogs = require('../data/blogs');

//create router//
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'));

})
router.get('/blog', (req, res) => {
    // blogs.forEach(e => {
    //     // console.log(e.title);
    //     console.log(e.content);
    // });
    res.sendFile(path.join(__dirname, '../templates/blogs.html'));
})
router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    console.log(myBlog);
    // res.sendFile(path.join(__dirname, "../templates/blogPage.html"));
})
module.exports = router;