var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1name").innerHTML=player1_name;
document.getElementById("player2name").innerHTML=player2_name;
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;
document.getElementById("playerquestion").innerHtml="question turn - "+player1_name;
document.getElementById("playeranswer").innerHtml="answer turn - "+player1_name;
function send(){
get_word=document.getElementById("word").value;
var word=get_word.toLowerCase();
console.log(word);    
var charAt1=word.charAt(1);
console.log(charAt1);
var lengthdivide_2=Math.floor(word.length/2);
var charAt2=word.charAt(lengthdivide_2);
console.log(charAt2);
var lengthminus_1=word.length-1;
var charAt3=word.charAt(lengthminus_1);
console.log(charAt3);
var remove_charAt1=word.replace(charAt1,"_");
var remove_charAt2=remove_charAt1.replace(charAt2,"_");
var remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);
var question_word="<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
input_box="<br>answer;<input type='text' id='inputcheckbox'>";
var check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
var row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
var question_turn="player1";
var answer_turn="player2";
function check(){
    var get_answer=document.getElementById("inputcheckbox").value;
answer=get_answer.toLowerCase();
console.log(answer);
console.log(word);
if(answer==word){
    if(answer_turn=="player1"){
        player1_score=player1_score+1;
        console.log(player1_score);
        document.getElementById("player1score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
    document.getElementById("player2score").innerHTML=player2_score;
    }
}
if(question_turn=="player1"){
question_turn="player2";
document.getElementById("playerquestion").innerHTML="questionturn- "+player2_name;
}
else{
    question_turn="player1";
document.getElementById("playerquestion").innerHTML="questionturn- "+player1_name;
}
if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("playeranswer").innerHTML="answerturn- "+player2_name;
    }
    else{
        answer_turn="player1";
    document.getElementById("playeranswer").innerHTML="answerturn- "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}







































































































































































































































































































































































































































































































































