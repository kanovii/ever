

function imgClk() {

    if(valuee == 1){
        if(matchMedia("screen and (min-width: 768px)").matches){
            this.style.width = '760px';
            this.style.height = '700px';
            this.style.top = '-140px';

        }else{
            this.style.width = '90vw';
            this.style.height = '60vh';
            this.style.top = '0px';    

        }
   
        this.style.zIndex = '50';
        this.style.position = 'absolute';
        this.style.backgroundPosition = 'center';
        this.style.backgroundSize = 'cover';
        this.style.backgroundRepeat = 'no-repeat';
        this.style.boxShadow = '1px 1px 5px 2px rgba(70, 23, 97, 0.3)';
        
        valuee--;

    }else {
        
        if(matchMedia("screen and (min-width: 768px)").matches){
            this.style.width = '520px';
            this.style.height = '400px';
        }else{
            this.style.width = '320px';
            this.style.height = this.height;
        }
        this.style.backgroundSize = 'cover';   
        this.style.top = '0px'; 
        this.style.position = 'relative';
        this.style.zIndex = "49";
        


        this.style.backgroundPosition = 'center';
        this.style.backgroundRepeat = this.backgroundRepeat;

        this.style.boxShadow = 'unset';


        valuee = 1;
        
    }
}

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


var valuee = 1;



