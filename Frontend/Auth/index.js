const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const bcrypt = require('bcrypt');
const { response } = require("express");
const saltRounds = 10

const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.urlencoded({extended: true}))

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie:
    {
        expires: 60*60*2,
    },
   })
); 

const  db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "Amma@2000",
    database : "mydb"
});

app.post('/login', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT * FROM login WHERE username=?",
        username,
        (err, result)=>{
            if(err){
                res.send({err: err});
            }
            if(result.length > 0){
                bcrypt.compare(password, result[0].password,(error, response)=>{                    
                    if(response){
                        req.session.user = result;
                        console.log(req.session.user); 
                        res.send(result)
                    }else{
                        res.send({message: "Wrong Username / Password"});         
                    }
                })
            }
            else{
                res.send({message: "User doesn't exists"});
            }
            
        }
    );
})

app.get("/login", (req, res) => {
    if (req.session.user) 
    {
        res.send({ loggedIn: true, user: req.session.user });
    } 
    else {
        res.send({ loggedIn: false });
    }
 }); 

app.post('/register', (req,res)=>{
    const usernamereg = req.body.usernamereg;
    const passwordreg = req.body.passwordreg;
    const role = req.body.role;

    bcrypt.hash(passwordreg,saltRounds, (err, hash)=>{
        if(err){
            console.log(err);
        }

        db.query(
            "INSERT INTO login  (username, password, role) VALUES (?,?,?)",
            [usernamereg, hash, role],
            (err, result)=>{
                if(err){
                    res.send({err: err});
                }            
                else{
                    res.send(result);            
                }
                
            }
        );
    })
    
});

app.listen(3001, ()=>{
    console.log("running server");
});