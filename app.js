const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// the above 2 commands are for post requests, its gives the response in json and string format respectively.

// app.use('/api', api);

app.use(express.static('public')) // to use static files like index.html

// app.use('urls',urls)
// app.get('/', (req, res) => {
//   res.send('First Express Message');
// });

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});