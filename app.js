const express = require('express');
const api=require('./api');
const { urls }   = require('./urls_data');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// the above 2 commands are for post requests, its gives the response in json and string format respectively.
app.use(express.static('public')) // to use static files like index.html


app.use('/api', api);

// app.use('urls',urls)
// app.get('/', (req, res) => {
//   res.send('First Express Message');
// });


// the code for getting url by its id, not getting used now though.
app.get('/u/:id',(req,res)=>{
  const id=req.params.id;
  const long_url = urls[id];
  if(long_url){
      res.redirect(long_url);
    }
  else{
    res.status(404).send({
      "error":"Invalid url"
    });
  }
});


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});