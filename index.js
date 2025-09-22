const express= require("express");
const app=express();
const path=require("path");

const port=8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=> {
    res.render("home.ejs");
});

app.get('/rollDice',(req,res) =>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal : num});
});

app.get("/ig/:username", (req,res) =>{
    // let followers=["adam","bob","steve","anarkali"];
    // let {username} = req.params;

    const instaData = require("./data.json");
    let {username} =req.params;
    const data= instaData[username];
    if(data){
    res.render("instagram.ejs" , {data});
    }else{
        res.render("error.ejs");
    }
    


    // res.render("instagram.ejs",{username,followers});
});
app.listen(port, (req,res)=>{
    console.log(`listening on port ${port}`);
});