const turnOnOff = document.getElementById ("turnOnOff");
const lamp = document.getElementById ("lamp");

function isLampBroken (){
    return lamp.src.indexOf ("quebrada") > -1   
}

function lampOn (){
    if ( !isLampBroken ()){
        lamp.src = "ligada.png";
    }
}

function lampOff (){
    if ( !isLampBroken ()){
        lamp.src = "desligada.png";
        turnOnOff.textContent = "Ligar";
    }
}

function lampBroken (){
    lamp.src= "quebrada.png";
    turnOnOff.textContent = "Comprar lâmpada";
    turnOnOff.style.width = "40vh";
}

function lampRestore(){
    lamp.src = "desligada.png";
}

function lampOnOff (){
    if ( turnOnOff.textContent == "Ligar"){
        lampOn();
        turnOnOff.textContent = "Desligar";
    }
    else{
        lampOff();
        turnOnOff.textContent = "Ligar";
    }
    if (isLampBroken()){
        lampRestore();
        window.open("https://shopee.com.br/search?keyword=l%C3%A2mpada", "_blank");
    }    
}

turnOnOff.addEventListener ("click", lampOnOff);
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener ("click", lampBroken);












