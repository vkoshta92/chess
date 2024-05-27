const express= require("express");
const socket= require("socket.io")
const http=require("http");
const {Chess}= require("chess.js");
const path=require("path");
const { log } = require("console");

const app= express();
const server= http.createServer(app);

const io= socket(server);  // jo socket kar skta h vo io kar sakta  hai .

const chess= new Chess();

let players={};

let currentPlayer="W";

app.set("view engine","ejs");  // look like html

app.use(express.static(path.join(__dirname,"public"))); // static part use kar skte h 

app.get("/",(req,res)=>{
    res.render("index",{title:"Chess Game"});
});

io.on("connection",function(uniquesocket){
console.log("connected");
uniquesocket.on("churan",function(){
    // console.log('churan recived');
    //  on se churan ko recive kiya and vppas frontend ko churan papi io.emit se bhej di.
    io.emit("churan papdi")   // sbko bhejna ho
})
})

server.listen(3000,function(){
    console.log('listing port on 3000');
});
