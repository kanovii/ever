const last = document.getElementById('last');
const boxBox = document.getElementById('boxbox');

last.addEventListener('click', changeLast);
let y = 1;
function changeLast () {
    if ( y == 1){
        boxBox.className = 'boxLast';
        last.innerText = 'FIRST';
        y= 2;
    } else {
        boxBox.className = 'box';
        last.innerText = 'LAST';

        y = 1;
    }
}