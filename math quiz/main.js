function adduser() {
    player1_name= document.getElementById("real").value;
    player2_name= document.getElementById("loss").value;

    localStorage.setItem("player1",player1_name);
    localStorage.setItem("player2",player2_name);

    window.location="math_page.html";
}

