const btn = document.getElementById('bg_btn');
const bx = document.getElementsByClassName('box');
const bd = document.getElementsByClassName('bar');


btn.addEventListener('click', change);
let x = 1;
function change() {

    
    if (x == 1) {
        bx[0].style.backgroundColor = 'rgba(121, 51, 161, 0.2)';
      //  bd[0].style.backgroundColor = 'rgba(121, 51, 161, 0.2)';
        x++
    }
    else {
        bx[0].style.backgroundColor = 'white';
     //   bd[0].style.backgroundColor = 'white';
        x = 1;
    }
    
}