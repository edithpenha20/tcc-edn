let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 8000)

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}

// menu
let list = document.querySelectorAll('.nav li');
function active(){
    list.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((i) =>
i.addEventListener('click', active));

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function(){
    header.classList.toggle('active');
}