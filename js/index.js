
const aleatorio = (min, max)=> {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

//Vaciar el campo si el actual numero es cero
function vaciar(){
    if(document.getElementById("sueldo").value == 0 ){
        document.getElementById("sueldo").value=null
    }
    else if(document.getElementById("sueldo").value == null){
        document.getElementById("sueldo").value=123
        alert("eNTRE AQUI")
    }
}

//Calcular valor de hora
function valorHora(sueldo){
    return sueldo/200
}

//Calcular valor de hora al cien
function valorHoraCien(sueldo){
    
    return valorHora(sueldo)*2;
}

//Calcular valor de hora al cincuenta
function valorHoraCincuenta(sueldo){
    
    return valorHora(sueldo)+(valorHora(sueldo)/2);
}

function verExtras(){
    let sueldo = parseInt(document.getElementById("sueldo").value);
    

    let cantHorasCien =parseInt(document.getElementById("hCien").value);

    let cantHorasCincuenta = parseInt(document.getElementById("hCincuenta").value);

    if(isNaN(cantHorasCincuenta) || isNaN(cantHorasCien) ){
        alert(`Campos incompletos. Si no realizo horas extras ingrese cero.`);
        return;
    }

    // let hora = sueldo/200

    // let horasCien = cantHorasCien * (hora * 2);
    // let horasCincuenta = cantHorasCincuenta * ( hora + hora/2 )

    let total = valorHoraCien(sueldo) * cantHorasCien + valorHoraCincuenta(sueldo) * cantHorasCincuenta
    
   

    // alert(`Usted debe cobrar $${total.toFixed(2)} en concepto de extras`);
    alert(`Usted debe cobrar $${Math.ceil(total.toFixed(2))} en concepto de extras`);



    // if(total < 20000){
        
    //     alert(listaFrasesBajo[aleatorio(0,(listaFrasesOK.length-1))])
    // }
    // else{
        
    //     alert(listaFrasesOK[aleatorio(0,(listaFrasesOK.length-1))])
    // }
    
    //document.getElementById("divResul").hidden = false;
    
    const myElement = document.getElementById("divResul");
    document.getElementById("inResultado").value = `$${Math.ceil(total.toFixed(2))}`;
    myElement.hidden = false;
}


let listaFrasesOK = [
    "Pagate las faturas pa los pibes!!", "Estas dulce", "afloja un poco ambicioso", "Deja un poco para los pobres"
]
let listaFrasesBajo = [
    "Que pobre sos!!!!!", "otro mes comiendo arroz", "agarra la pala", "sin palabras", "Dedicate a otra cosa"
]


