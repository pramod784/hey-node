const express=require('express');
const fetch=require('node-fetch');
const router=express.Router();
const dotenv=require('dotenv');
dotenv.config();

router.get('/',(req,res)=>{res.render('index');});

router.get('/weather', async(req,res)=>{
 const city=req.query.city;
 if(!city) return res.render('index',{error:'City required'});
 try{
   const apiKey= process.env.API_KEY;
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   const r=await fetch(url);
   const data=await r.json();
   if(data.cod!=200) return res.render('index',{error:data.message});
   res.render('result',{w:data});
 }catch(e){
   res.render('index',{error:'API error'});
 }
});
module.exports=router;