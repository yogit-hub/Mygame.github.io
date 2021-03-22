const express = require("express");
const app = express();

//Register a port number
const PORT = process.env.PORT || 9000;

//specify rules here
const selection = [

  {
    name: 'rock',
    beats: 'scissors'

  },
  {
    name: 'paper',
    beats: 'rock'

  },
  {
    name: 'scissors',
    beats: 'paper'

  }
]

var player1;
var player2;
var player3;
var player4;

//calculate the  results for each player
function getResult() {

  let result = [

    {
      name: 'player1',
      resultforP2: 0,
      resultforP3: 0,
      resultforP4: 0

    },
    {
      name: 'player2',
      P2resultforP1: 0,
      P2resultforP3: 0,
      P2resultforP4: 0
    },
    {
      name: 'player3',
      P3resultforP2: 0,
      P3resultforP1: 0,
      P3resultforP4: 0
    },
    {
      name: 'player4',
      P4resultforP2: 0,
      P4resultforP3: 0,
      P4resultforP1: 0
    }
  ]


  //result set for player1 
  if (player1.beats === player2.name) {

    result[0].resultforP2 = 1
  }
  if (player1.beats === player3.name) {

    result[0].resultforP3 = 1
  }

  if (player1.beats === player4.name) {

    result[0].resultforP4 = 1

  }



   //result set for player2 
  if (player2.beats === player1.name) {

    result[1].P2resultforP1 = 1

  }

  if (player2.beats === player3.name) {

    result[1].P2resultforP3 = 1

  }
  if (player2.beats === player4.name) {

    result[1].P2resultforP4 = 1
  }


   //result set for player3
  if (player3.beats === player1.name) {

    result[2].P3resultforP1 = 1
  }

  if (player3.beats === player2.name) {

    result[2].P3resultforP2 = 1

  } if (player3.beats === player4.name) {

    result[2].P3resultforP4 = 1
  }



  //result set for player4
  if (player4.beats === player1.name) {

    result[3].P4resultforP1 = 1
  }

  if (player4.beats === player2.name) {

    result[3].P4resultforP2 = 1

  }
  if (player4.beats === player3.name) {

    result[3].P4resultforP3 = 1
  }

  return result
}

//randomly generate input for player1,player2,player3,player4
function random() {
  const randomvalue = Math.floor(Math.random() * selection.length);
  const result = selection[randomvalue];
  return result;
}

//GET  Api
app.get("/game/start", (req, res) => {
  //here set the  header
  res.setHeader('Content-Type', 'text/html');

  for (var i = 1; i <= 50; i++) {
    player1 = random();
    player2 = random();
    player3 = random();
    player4 = random();
    
    //geting the player result
    var result = getResult();

    res.write("<center><h4>" + i + " iteration" + " </h4></center>")

   //show players input values
    res.write("<center><table border='1' cellspacing ='2'cellpadding='16' width= '30%'><th>player1</th><th>player2</th><th>player3</th><th>player4</th><tr><td> " + player1.name + " </td>  <td>" + player2.name + " </td> <td>" + player3.name + "</td> <td> " + player4.name + "</td></tr> </table></center>" +'<br/>'+'<br/>');

    //show players data
    res.write
      ("<center><table border cellpadding='10' width= '30%'>"
        + "<th>" + " Players " + "</th>"
        + "<th>" + " Player 1 " + "</th>"
        + "<th>" + " Player 2" + "</th>"
        + "<th>" + " Player 3" + "</th>"
        + "<th>" + " Player 4" + "</th>"
       

        + "<tr>"

        + "<td>" + result[0].name + "</td>"
        + "<td>" + "-" + "</td>"
        + "<td>" + result[0].resultforP2 + "</td>"
        + "<td>" + result[0].resultforP3 + "</td>"
        + "<td>" + result[0].resultforP4 + "</td>"


        + "</tr>"

        + "<tr>"
        + "<td>" + result[1].name + "</td>"
        + "<td>" + result[1].P2resultforP1 + "</td>"
        + "<td>" + "-" + "</td>"
        + "<td>" + result[1].P2resultforP3 + "</td>"
        + "<td>" + result[1].P2resultforP4 + "</td>"

        + "</tr>"



        + "<tr>"


        + "<td>" + result[2].name + "</td>"
        + "<td>" + result[2].P3resultforP1 + "</td>"
        + "<td>" + result[2].P3resultforP2 + "</td>"
        + "<td>" + "-" + "</td>"
        + "<td>" + result[2].P3resultforP4 + "</td>"

        + "</tr>"



        + "<tr>"

        + "<td>" + result[3].name + "</td>"
        + "<td>" + result[3].P4resultforP1 + "</td>"
        + "<td>" + result[3].P4resultforP2 + "</td>"
        + "<td>" + result[3].P4resultforP3 + "</td>"
        + "<td>" + "-" + "</td>"

        + "</tr>"


        + "</table></center>");

    var jsonresponse = JSON.stringify(result);
    //Returning a json response
    //res.write(" "  +jsonresponse +" ");
  }
  res.end()

})


//creating a server
app.listen(PORT, () => {

  console.log("server run on port " + PORT)

})