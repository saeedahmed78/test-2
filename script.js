let alphabad = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]
function keys(){
    
    for(let i = 0; i <26 ; i++){
    document.querySelector(".keyboards").innerHTML += 
    
    `<div class = "text-button " onclick = "show('${alphabad[i]}')">
    <p class = "text">${alphabad[i]}</p>
    <img src="images/keyboard-key.png" alt="" class = "imagess img"></div>`;
}
function spChar(){
    document.querySelector(".keyboards").innerHTML += `<div class = "text-button space-text" onclick = "show('${alphabad[26]}')">
    <p class = "text text-space" >SPACE</p>
    <img src="images/space-bar-key.png" alt="" class = "imagess img2"></div>
    <div class = "text-button space-text" onclick = "alertt()">
    <p class = "text text-space" ><i class="fas fa-arrow-circle-right"></i></p>
    <img src="images/keyboard-key.png" alt="" class = "imagess img"></div>`;
}



spChar();   
}
function show(alpha){
    document.querySelector(".content").innerHTML += alpha; 
}
function alertt(){
    alert("Message Send");
    document.querySelector(".content").innerHTML = "";  
}
