const last = document.getElementById('last');

last.addEventListener('click', changeLast);
let y = 1;
function changeLast () {
    if ( y == 1){
        bx[0].className = 'boxLast';
        last.innerText = 'FIRST';
        y= 2;
    } else {
        document.getElementById('boxbox').className = 'box';
        last.innerText = 'LAST';

        y = 1;
    }
}