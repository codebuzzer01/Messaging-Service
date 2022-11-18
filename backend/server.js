require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose');
let MongoClient = require('mongodb').MongoClient;

const User = require('./models/User')

  

  
const db = require('./config/keys').MongoURI


mongoose.connect(db, { useNewUrlParser:true }).
then(()=> console.log('MongoDB Connected...')).
catch((err)=> console.log(err))

const PORT=5000
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN
const smsKey = process.env.SMS_SECRET_KEY
const twilioNum = process.env.TWILIO_PHONE_NUMBER

const client = require('twilio')(accountSid, authToken)
app.get('/getMsg',(req,res)=>{
    const inboxArray =[]
    User.find(function (err,userx){
        if (err){
            throw err;
        }
        else{
            //add this code sentence
            var user_arr =Object.keys(userx).map(
                function(key){
                    return userx[key];
                }
            );
    
            //now, use forEach sentence
            user_arr.forEach(function(us){
                inboxArray.push(us)
            })
            
    
        }
        res.send(inboxArray)
    })  
    



})


app.post('/sendOTP',(req,res)=>{
    const{
        fName,lName,msg,phNo
    } = req.body
    const newMsg = User({
        FName: `${fName} ${lName}`,
        message: msg,
    })
    User.create(newMsg,
        function(err, result) {
            if (err) throw err;
            res.status(200).json(newMsg)
            
        }
        )
    client.messages.create({
            body : msg,
            from : twilioNum,
            to: phNo
        })
        .then((messages)=>{
            res.status(200).json({phNo,msg})
    
        }).catch((err)=>{
            
            return res.json({error: err.message})
        })
            
        })
        
        
        



app.listen(PORT, ()=>{
    console.log("Server running")
})

        
        
        
        