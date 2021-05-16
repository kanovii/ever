



/*

    if(value === true) {
        document.getElementById('bg_img1').addEventListener('click', imgClk);
        document.getElementById('bg_img2').addEventListener('click', imgClk);
        document.getElementById('bg_img3').addEventListener('click', imgClk);
        document.getElementById('bg_img4').addEventListener('click', imgClk);
        document.getElementById('bg_img5').addEventListener('click', imgClk);
        document.getElementById('bg_img6').addEventListener('click', imgClk);
        document.getElementById('bg_img7').addEventListener('click', imgClk);


        value = false;
        } else {
            document.getElementById('bg_img1').removeEventListener('click', arguments.callee);
            document.getElementById('bg_img2').removeEventListener('click', arguments.callee);
            document.getElementById('bg_img3').removeEventListener('click', arguments.callee);
            document.getElementById('bg_img4').removeEventListener('click', arguments.callee);
            document.getElementById('bg_img5').removeEventListener('click', arguments.callee);
            document.getElementById('bg_img6').removeEventListener('click', arguments.callee);
            document.getElementById('bg_img7').removeEventListener('click', arguments.callee);


    
    }
*/

function imgClk() {

    if(valuee == 1){
        this.style.width = '100vw';
        this.style.height = '100vh';
        this.style.zIndex = '50';
        this.style.position = 'absolute';
        this.style.backgroundPosition = 'center';
        this.style.backgroundSize = 'contain';
        this.style.backgroundRepeat = 'no-repeat';
        this.style.top = '-150px'    
        /*
        x.style.visibility = 'visible '; 
        x.style.position = 'absolute';  
        */ 
        valuee--;

    }else {
        
        this.style.backgroundSize = 'cover';   

        this.style.width = '320px';
        this.style.height = this.height;
        this.style.top = '0px'; 
        this.style.position = 'relative';
        this.style.zIndex = this.zIndex;
        


        this.style.backgroundPosition = 'center';
        this.style.backgroundRepeat = this.backgroundRepeat;

        valuee = 1;
        
    }
}




var valuee = 1;


document.getElementById('bg_img1').addEventListener('click', imgClk);
document.getElementById('bg_img2').addEventListener('click', imgClk);
document.getElementById('bg_img3').addEventListener('click', imgClk);
document.getElementById('bg_img4').addEventListener('click', imgClk);
document.getElementById('bg_img5').addEventListener('click', imgClk);
document.getElementById('bg_img6').addEventListener('click', imgClk);
document.getElementById('bg_img7').addEventListener('click', imgClk);

