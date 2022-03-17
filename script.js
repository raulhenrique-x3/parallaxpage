let container = document.querySelector('.container');
let layer = document.querySelectorAll('.layer');

container.onmousemove = function(e){
    let X = e.pageX;
    let Y = e.pageY;

    layer[0].style.transform = 'translate('+ X/100 +'px, '+ Y/100 +'px)'
    layer[1].style.transform = 'translate('+ X/100*2 +'px, '+ Y/100*2 +'px)'
    layer[2].style.transform = 'translate('+ X/100*4 +'px, '+ Y/100*4 +'px)'
    layer[3].style.transform = 'translate('+ X/100*6 +'px, '+ Y/100*6 +'px)'
    layer[4].style.transform = 'translate('+ X/100*8 +'px, '+ Y/100*8 +'px)'
    layer[5].style.transform = 'translate('+ X/100*10 +'px, '+ Y/100*10 +'px)'
    layer[6].style.transform = 'translate('+ X/100*12 +'px, '+ Y/100*12  +'px)'
}

let register = document.getElementById('register');
let loginBox = document.querySelector('.loginBox')

register.addEventListener('click', hiddenLoginBox);
    function hiddenLoginBox(){
        loginBox.style.display = "none"
    };

let cadastroBox = document.querySelector('.cadastroBox')
register.addEventListener('click', showCadastroBox);
    function showCadastroBox(){
        cadastroBox.style.display = "flex"
    }

let cancelar = document.getElementById('cancel');
cancelar.addEventListener('click', cancelarRegistro);
    function cancelarRegistro(){
        cadastroBox.style.display = "none"
        if (cadastroBox.style.display = "none"){
            loginBox.style.display = "flex"
        }
    }