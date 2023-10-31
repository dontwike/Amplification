const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.id === 'gray'){
            body.style.backgroundColor = 'gray'
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
        if (e.target.id === 'pink'){
            body.style.backgroundColor = 'pink'
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor = 'green'
        }
        if (e.target.id === 'red'){
            body.style.backgroundColor = 'red'
        }
    })
})

function randomColor() {

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.backgroundColor = bgColor;
}

function resetColor() {
    document.body.style.backgroundColor = "white";
}