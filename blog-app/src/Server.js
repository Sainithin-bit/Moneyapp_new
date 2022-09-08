
import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express';
import bodyParser from 'body-parser';


const uri = "mongodb+srv://Denverdb:denver@cluster0.iuocy.gcp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
var db;
client.connect(err => {
  db = client.db("test");
  console.log('Done');
});



const app= express();
app.listen(3000);
app.use(express.static('src'));
app.use(express.json());

app.get('/', (req, res)=>{

    res.sendFile('index.html', {root:"public"});

});


app.get('/get-all', (req, res) => {

  const cursor = db.collection('blogs').find({});
  console.log(cursor);
  res.send(cursor);
  function getallblogs(){}

});

app.get('/get-blog-by-id', (req, res)=>{
  const cursor=db.collection('blogs').find(req._id);
  res.send(cursor);
  function get_blogs_by_id(_id){}
});

app.post('/create-blog', (req, res)=>{
  var data=req.body;
  console.log(JSON.stringify(data.tt))
  db.collection('blogs').insertOne({});
  res.send('sucess');
  function create_blog(){}
});

app.post('/update-blog', (req, res)=>{
  db.collection('blogs').update();
  function update_blog(){}
});

app.get('/delete-blog', (req, res)=>{
  db.collection('blogs').deleteOne();
  function delete_blog(){}
});

app.post('/create-review', (req, res)=>{
  db.collection('reviews').insertOne({"body":"Review body"});
  res.send("Review Created");
  function create_review(){}
});

app.get('/delete-review', (req, res)=>{  
    db.collection('review').deleteOne( )
    function delete_review(){}

});


