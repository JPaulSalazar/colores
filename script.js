let element = document.querySelectorAll('.color p');
function colores(){
    let x = Math.floor(Math.random() * (256 - 0) + 0 );
    let y = Math.floor(Math.random() * (256 - 0) + 0 );
    let z = Math.floor(Math.random() * (256 - 0) + 0 );
    return `rgb(${x}, ${y}, ${z})`;
}

for(i = 0; i < element.length; i++){
    element[i].style.color = colores();
}