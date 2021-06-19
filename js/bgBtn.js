const btn = document.getElementById('bg_btn');
const bx = document.getElementsByClassName('box');
const bd = document.getElementsByClassName('bar');
const header = document.getElementsByClassName('header');
const bod = document.getElementsByTagName('body');

btn.addEventListener('click', change);
let x = 1;
function change() {

    
    if (x == 1) {
        boxBox.style.backgroundColor = 'rgba(121, 51, 161, 0.1)';
        header[0].style.backgroundColor = 'rgba(121, 51, 161, 0.1)';
        bod[0].style.backgroundColor = 'rgba(121, 51, 161, 0.1)';

        
      //  bd[0].style.backgroundColor = 'rgba(121, 51, 161, 0.2)';
        x++;
    } else {
        boxBox.style.backgroundColor = 'white';
        header[0].style.backgroundColor = 'white';
        bod[0].style.backgroundColor = 'white';


     //   bd[0].style.backgroundColor = 'white';
        x = 1;
    }
    
}

