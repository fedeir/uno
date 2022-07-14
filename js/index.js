
const aleatorio = (min, max)=> {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}



function verExtras(){
    let sueldo = parseInt(document.getElementById("sueldo").value);
    

    let cantHorasCien =parseInt(document.getElementById("hCien").value);

    let cantHorasCincuenta = parseInt(document.getElementById("hCincuenta").value);

    if(isNaN(cantHorasCincuenta) || isNaN(cantHorasCien) ){
        alert(`Campos incompletos. Si no realizo horas extras ingrese cero.`);
        return;
    }

    let hora = sueldo/200

    let horasCien = cantHorasCien * (hora * 2);
    let horasCincuenta = cantHorasCincuenta * ( hora + hora/2 )

    let total = horasCien + horasCincuenta
    
   

    alert(`Usted debe cobrar $${total.toFixed(2)} en concepto de extras`);



    if(total < 20000){
        alert(`Que pobre sos!!!`)
    }
    else{
        let alea=2;
        alert(listaFrasesOK[aleatorio(0,(listaFrasesOK.length-1))])
    }
    
}


let listaFrasesOK = [
    "Pagate las faturas pa los pibes!!", "Estas dulce", "afloja un poco ambicioso", "Deja un poco para los pobres"
]

