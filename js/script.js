const text = document.querySelector('.title')
text.onclick=function(){
    text.textContent = 'Очень рады вас видеть';
}

const image = document.querySelector('.image');
image.onclick = function(){
    let Mysrc = image.getAttribute('src');
    if (Mysrc === 'img/like.png'){
        image.setAttribute('src','img/dislike.png');
    } 
    else{
        image.setAttribute('src','img/like.png');
    }
}

let i=0;
let addressText='6 Rue de l Amiral de Coligny, Paris';
let speed = 150;
const btn = document.querySelector('.addressButton');
function TextWriter(){
    if (i < addressText.length) {
        document.querySelector('.addressText').innerHTML += addressText.charAt(i);
        i++;
        setTimeout(TextWriter, speed);
    }
}
