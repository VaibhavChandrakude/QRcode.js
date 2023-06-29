const express = require("express");
const app =express();
const port =process.env.port || 3000;
const ejs=require("ejs");
const path=require("path");
const qrcode=require("qrcode")

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'view')); 

app.get("/",(req,res,next)=>{
    res.render('index');
});

app.post("/scan",(req,res,next)=>{
    const input=req.body.text;
    console.log(input);
    qrcode.toDataURL(input,(err,src)=>{
        res.render('scan',{
            qr_source:src,
        })
    })

});

app.listen(port, console.log(`listening on port ${port}`));
