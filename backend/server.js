const express = require("express");
const {MongoClient} = require("mongodb");
const bodyParser = require("body-parser");
const cors = require('cors');
const client = new MongoClient("mongodb://localhost:27017");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

async function postData(details, collectionname)
{
    let returnValue = 0;
    //console.log(details);
    try{
        await client.connect();
        returnValue = await client.db("ticketbookdb").collection(collectionname).insertOne(details);
    }catch{
        returnValue = "Error";
    }finally{
        client.close();
    }
    if(returnValue != 0)
        return true;
    else
        return false;
}

async function getData(email, collectionname)
{
    let returnValue = 0;
   
    try{
        await client.connect();
        returnValue = await client.db("ticketbookdb").collection(collectionname).findOne({_id: email},{password: 1});

    }catch{
        returnValue = "Error";
    }finally{
        client.close();
    }

    return returnValue;
}


async function postHallSeats(hallname, seats)
{
    let returnValue = 0;
   
    try{
        await client.connect();
        returnValue = await client.db("ticketbookdb").collection("cinemahall").updateOne({_id: hallname},{$set: {seats: seats}});

    }catch{
        returnValue = "Error";
    }finally{
        client.close();
    }

    return returnValue;
}

app.post("/ticketbookedanddictmodify/:data/:hallname/:seats", function(req, res){


    postData(JSON.parse(req.params.data), "boughttickets").then((data) => {

        postHallSeats(req.params.hallname, JSON.parse(req.params.seats)).then((data) => {

            res.send(data);

        });
        
    });

    

    
});


app.post("/signin/:emailpassword", function(req, res){

    var emailpassword = JSON.parse(req.params.emailpassword);

    getData(emailpassword.email, "users").then((data) => {
        
        if(!data || !emailpassword)
            res.send(false);
        else if (data.password == emailpassword.password)
            res.send(true);
        else
            res.send(false);

    });

});


app.post("/signup/:details", function(req, res){

    var details = JSON.parse(req.params.details);

    postData(details, "users").then((data) => {

        res.send(data);

    });

});

async function getHallSeats(hallname)
{
    let returnValue = 0;
   
    try{
        await client.connect();
        returnValue = await client.db("ticketbookdb").collection("cinemahall").findOne({_id: hallname},{seats: 1});

    }catch{
        returnValue = "Error";
    }finally{
        client.close();
    }

    return returnValue;
}
app.post("/cinemahallseat/:hallname", function(req, res){

    var hallname = req.params.hallname;

    //console.log(hallname);
    getHallSeats(hallname).then((data) => {

        res.send(data);
        //console.log(data);

    });

});





app.listen(3000, function(req, res){
    console.log("Server running at 3000");
});