const box = document.querySelector("button");
const text = document.querySelector('ul');
const smile=String.fromCodePoint(128522);
const bad=String.fromCodePoint(128534);
const sogood=String.fromCodePoint(128513);
const notgood=String.fromCodePoint(128543);
const soso=String.fromCodePoint(128530);

box.addEventListener("focus", function(){
    box.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function(){
    box.textContent = "Click here to give your rating"
})



box.addEventListener("keypress", function (event) {

    var input=event.keyCode
    
    let resultemj = ""
    var text; 
    

    switch (input) {
        case 49:
            resultemj = bad 
            text = "Really Bad!";
            
            break
        case 50:
            resultemj = notgood
            text = "Bad";
            
            break
        case 51:
            resultemj = soso
            text = "Good";
            break
        case 52:
            resultemj = smile
            text = "Very Good";
            break
        case 53:
            resultemj = sogood
            text = "Excellent";
            
            break
        default:
          
            resultemj = bad
            text = " <br>You have to type a number between 1 and 5";
            break
    }

    box.innerHTML = `<ul>
    <li id="anime">${resultemj}</li><li>${text}</li></ul>`
})