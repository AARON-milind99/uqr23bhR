function addUser(){
    var player1name=document.getElementById("player1_name_input").value;
    var player2name=document.getElementById("player2_name_input").value;
    console.log(player1name);
    localStorage.setItem("player1_name",player1name);
    localStorage.setItem("player2_name",player2name);
    window.location.replace("game_page.html");
}
