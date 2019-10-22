const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//app.get('/api/hello', (req, res) => {
 //   res.send({message : "Hello Express !"});
//})

app.get('/api/customers', (req,res) => {
    res.send([
        {
            "id" : 1
          , "image" : "https://placeimg.com/64/64/1"   
          ,  "name" : "이건완"
          , "birthday" : "920211"
          , "gender" : "남자"
          , "job" : "개발자"  
          },
          {
            "id" : 2
          , "image" : "https://placeimg.com/64/64/2"   
          ,  "name" : "손민규"
          , "birthday" : "930211"
          , "gender" : "남자"
          , "job" : "개발자"  
          },
          {
            "id" : 3
          , "image" : "https://placeimg.com/64/64/3"   
          ,  "name" : "이건완"
          , "birthday" : "920211"
          , "gender" : "남자"
          , "job" : "개발자"  
          }
    ]);
});
app.listen(port, () => console.log(`Listening on Port ${port}`));