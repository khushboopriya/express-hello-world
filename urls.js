const express = require('express');
const shortid = require('shortid')

const router = express.Router();

// const urls = {}

const  { urls }  = require('./urls_data');//this makes the dictionary global


router.get('/',(req,res)=>{
    // To get the list of all urls
    const urlList = [];
    Object.keys(urls).forEach(urlId =>{
        // urlList.push({id:urlId,long_url:long_url })
        urlList.push({id:urlId,long_url:urls[urlId]});
    });
    res.send(urlList);
});

router.post('/',(req,res)=>{
    // To post a long url
    const long_url = req.body.long_url;
    const id = shortid.generate();
    urls[id] = long_url;
    res.status(201).send({id});
});

router.get('/:id',(req,res) =>{
    // To get the short url or long url from its id
    const id = req.params.id;
    const long_url = urls[id];
    if (long_url){
        res.send({
            id: id,
            long_url:long_url
        });
    }
    else{
        res.status(404).send({"error": "Invalid  short url id"});
    }
});

module.exports = router;