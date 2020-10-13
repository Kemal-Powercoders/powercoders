var color1 = document.getElementById("readmore");
var color2 =document.getElementById("readmore1");
color1.onclick= function(){
    var change= document.getElementById("color");
    change.style.backgroundImage='linear-gradient(rgba(100,255,74), rgb(255,0,0))'
    
}
color2.onclick= function(){
    var change= document.getElementById("color");
    change.style.backgroundImage='linear-gradient(rgba(74,255,74), rgb(255,0,0))'
    
}