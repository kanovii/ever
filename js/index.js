

function imgClk(event) {

    if(valuee == 1){
        if(matchMedia("screen and (min-width: 768px)").matches){
            event.target.style.width = '760px';
            event.target.style.height = '700px';
            event.target.style.top = '-140px';



        }else{
            event.target.style.width = '90vw';
            event.target.style.height = '60vh';
            event.target.style.top = '0';

        }
        event.target.style.zIndex = '50';
        event.target.style.position = 'absolute';
        event.target.style.backgroundPosition = 'center';
        event.target.style.backgroundSize = 'cover';
        event.target.style.backgroundRepeat = 'no-repeat';
        event.target.style.boxShadow = '1px 1px 5px 2px rgba(70, 23, 97, 0.3)';
        
        valuee--;

    }else {
        
        if(matchMedia("screen and (min-width: 768px)").matches){
            event.target.style.width = '520px';
            event.target.style.height = '400px';
        }else{
            event.target.style.width = '320px';
            event.target.style.height = '400px';
        }
        event.target.style.backgroundSize = 'cover';
        event.target.style.top = '0';
        event.target.style.position = 'relative';
        event.target.style.zIndex = "49";
        


        event.target.style.backgroundPosition = 'center';
        event.target.style.backgroundRepeat = this.backgroundRepeat;

        event.target.style.boxShadow = 'unset';


        valuee = 1;
        
    }
}
/*
document.getElementById('bg_img1').addEventListener('click', imgClk);
document.getElementById('bg_img2').addEventListener('click', imgClk);
document.getElementById('bg_img3').addEventListener('click', imgClk);
document.getElementById('bg_img4').addEventListener('click', imgClk);
document.getElementById('bg_img5').addEventListener('click', imgClk);
document.getElementById('bg_img6').addEventListener('click', imgClk);
document.getElementById('bg_img7').addEventListener('click', imgClk);
document.getElementById('bg_img8').addEventListener('click', imgClk);
document.getElementById('bg_img9').addEventListener('click', imgClk);
document.getElementById('bg_img10').addEventListener('click', imgClk);
document.getElementById('bg_img11').addEventListener('click', imgClk);
document.getElementById('bg_img12').addEventListener('click', imgClk);
document.getElementById('bg_img13').addEventListener('click', imgClk);
document.getElementById('bg_img14').addEventListener('click', imgClk);
document.getElementsByClassName('bg_img')[14].addEventListener('click', imgClk);
*/

const bgbg = document.querySelectorAll('.bg_img');
var valuee = 1;

function setNum () {
    for(let i = 0; i < bgbg.length; i++) {
        bgbg[i].addEventListener('click', imgClk);

    }
}

function init () {
    setNum();
}
init ();