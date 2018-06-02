var Tigger = {
    character: "Tigger",
    greet: function(){
        console.log("Tiggers are the best");
    }

};
var Winnie = {
    character: "Winnie",
    greet: function(){
        console.log("Winnie is hungry");
    }

};
var Piglet = {
    character: "Piglet",
    greet: function(){
        console.log("Piglet is lonely");
    }
};
var Bees = {
    character: "Bees",
    greet: function(){
        console.log("Bees gonna sting ya");
    }

};
var Chris = {character: "Chris"};
var Owl = {character: "Owl"};
var Rabbit = {character: "Rabbit"};
var Gopher = {character: "Gopher"};
var Kanga = {character: "Kanga"};
var Eeyore = {character: "Eeyore"};
var Heffalumps = {character: "Heffalumps"};

Tigger.north = Winnie;
Winnie.south = Tigger;
Winnie.north = Chris;
Winnie.west = Piglet;
Winnie.east = Bees;
Piglet.east = Winnie;
Piglet.north = Owl;
Bees.west = Winnie;
Bees.north = Rabbit;
Owl.south = Piglet;
Owl.east = Chris;
Chris.west = Owl;
Chris.south = Winnie;
Chris.east = Rabbit;
Chris.north = Kanga;
Rabbit.west = Chris;
Rabbit.south = Bees;
Rabbit.east = Gopher; 
Kanga.south = Chris;  
Kanga.north = Eeyore; 
Eeyore.south = Kanga;   
Eeyore.east = Heffalumps;
Heffalumps.west = Eeyore;       

var charactersArray = [Tigger, Winnie, Piglet, Bees, Owl, Chris, Rabbit, Kanga, Eeyore, Heffalumps];
var player = {
    honey: false,
    location: Tigger,
}
var honeyTarget = Winnie;

function pickUp(){
    if(player["location"]["character"] == "Bees"){
        console.log("you are trying to pick up honey")
        player["honey"] = true;
    }
    else{
        console.log("no honey here");
    }
}

function drop(){
    if(player["location"]["character"] == honeyTarget["character"]){
        console.log("success MA")
        player["honey"] = false;
    }
    else{
        console.log("wrong place to drop");
        player["honey"] = false;
    }
}


function move(direction){
    if(direction == "north"){
        if(player["location"]["north"]){
            player["location"] = player["location"]["north"];
            console.log("You moved north to " + player["location"]["character"] + "'s house");
            player["location"].greet();
        }
        else{
            console.log("You cannot go that way");
        }
    }
    if(direction == "south"){
        if(player["location"]["south"]){
            player["location"] = player["location"]["south"];
            console.log("You moved south to " + player["location"]["character"] + "'s house");
            player["location"].greet();
        }
        else{
            console.log("You cannot go that way");
        }
    }
    if(direction == "east"){
        if(player["location"]["east"]){
            player["location"] = player["location"]["east"];
            console.log("You moved east to " + player["location"]["character"] + "'s house");
            player["location"].greet();
        }
        else{
            console.log("You cannot go that way");
        }
    }
    if(direction == "west"){
        if(player["location"]["west"]){
            player["location"] = player["location"]["west"];
            console.log("You moved west to " + player["location"]["character"] + "'s house");
            player["location"].greet();
        }
        else{
            console.log("You cannot go that way");
        }
    }
}

function hundredAcreWoods(){
    var result = "";
    charactersArray.forEach(function(value){
        result += value["character"] + " with:  \n";
        if(value["east"]){
            result += value["east"]["character"] + " to the east \n";
        }
        if(value["west"]){
            result += value["west"]["character"] + " to the west \n";
        }
        if(value["north"]){
            result += value["north"]["character"] + " to the north \n";
        }
        if(value["south"]){
            result += value["south"]["character"] + " to the south \n";
        }
        result += "\n";
    });
    return result;
}



// console.log(hundredAcreWoods());