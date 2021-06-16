
window.onscroll = function() {
    headerChanger();
}

function headerChanger () {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById('headerScroll').className = 'headerChanger';
    }
    else {
        document.getElementById('headerScroll').className = 'header';
    }
}