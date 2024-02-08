let numeroSecretoAleatorio, rango=10;
let numeroIntentos=1;
let listaNumerosAleatorios=[];
let NumeroIntentosMaximo=4;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);  
    if(numeroSecretoAleatorio===numeroUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos==1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //EL usuario no acertó
        if(numeroIntentos<NumeroIntentosMaximo){
        if(numeroUsuario>numeroSecretoAleatorio){
            asignarTextoElemento('p',"Numero secreto es menor");
        }else{
            asignarTextoElemento('p',"Numero secreto es mayor");
        }
        numeroIntentos++;
        limpiarCaja();
        }else{
            asignarTextoElemento('p',`Numero de intentos maximo alcanzado (${NumeroIntentosMaximo})`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    }

}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario').value='';
}   

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

function generarNumeroSecreto(){
    let numeroGenerado=numeroSecretoAleatorio=Math.floor(Math.random()*rango)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosAleatorios);
    if(listaNumerosAleatorios.length==rango){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles ');
    }else{
        if(listaNumerosAleatorios.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosAleatorios.push(numeroGenerado);
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del numero secreto!");
    asignarTextoElemento('p',"Introduce un numero entre 1 al "+rango);
    generarNumeroSecreto();
    numeroIntentos=1;
}



condicionesIniciales();