import express from 'express';
import mongoose from 'mongoose';
import cards from "./dbCards.js";
import cors from "cors";

//App config
const app=express();
const port= process.env.PORT||8000;
const connection_url='mongodb link'

///
////
/////
//////mongo db link to place
////
///
//
/

//Middlewares
app.use(express.json());
app.use(cors());

//db config
mongoose.connect(connection_url,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//Api Endpoints
app.get('/',(req,res)=> res.status(200).send("HI"));
app.post('/tinder/cards',(req,res)=>{
  const dbCard= req.body;
  cards.create(dbCard,(err,data)=>{
    if(err){
      res.status(500).send(err);
    }else{
      res.status(201).send(data);
    }
  })
});
app.get('/tinder/cards',(req,res)=>{
  console.log("its is here");
  cards.find((err,data)=>{
    if(err){
      console.log("its is here");
      res.status(500).send(err);
    }else{
      res.status(200).send(data);
    }
  })
})

//listener
app.listen(port,()=>console.log(`listening to the localhost at port ${port}`));
