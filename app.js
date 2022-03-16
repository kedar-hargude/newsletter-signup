const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailName = req.body.emailName;

    console.log(firstName, lastName, emailName);
    res.write("Form submit karke Post request mil gaya na bhai!! \n");
    res.write(`Got \n firstname: ${firstName} \n lastname: ${lastName} \n email: ${emailName}`);
    res.send();
});

app.listen(port, function(){
    console.log(`Bhai ne bola port ${port} pe sunneka to sunneka!`);
});