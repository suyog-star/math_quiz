player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;

function send() {
    Number_1=document.getElementById("Number_1").value;
    Number_2=document.getElementById("Number_2").value;
    answer=parseInt(Number_1)*parseInt(Number_2);
   
    

  
    
    

    question="<h4 id='java'>"+Number_1+"x"+Number_2+"</h4>";
    input="<br> Answer:<input type='text' id='input'>";
    button="<br> <br> <button class='btn btn-info ' onclick='time()'>check</button>";

    row= question+input+button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("Number_1").value="";
    document.getElementById("Number_2").value="";
    
}

question_turn="player1";
answer_turn="player2";

function time() {
get_answer=document.getElementById("input").value;
if(get_answer==answer) {

if(answer_turn=="player1") {
    player1_score=player1_score +1;
    document.getElementById("player1_score").innerHTML=player1_score;
}
else {
    player2_score=player2_score +1;
    document.getElementById("player2_score").innerHTML=player2_score;
}
}
if(question_turn=="player1") {
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question Turn -"+player2_name;
}
else {
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question Turn -"+player1_name;

}
if(answer_turn=="player1") {
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer Turn -"+player2_name;
}
else {
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer Turn -"+player1_name;


}
document.getElementById("output").innerHTML="";
}
