// let pes = document.getElementById("peso")
// let alt = document.getElementById('altura')
// let sex = document.getElementsByName('op')
// let age = document.getElementById('idade')
// let resultado = document.getElementById('res')

function clean(){
     document.getElementById("peso").value  = ""
     document.getElementById('altura').value  = ""
     document.getElementById('idade').value  = 6
     document.getElementById('res').innerHTML= "Resultado"
   
}

function resultado(){
let pes = document.getElementById("peso")
let alt = document.getElementById('altura')
let sex = document.getElementsByName('op')
let age = document.getElementById('idade')
let resultado = document.getElementById('res')                                                                             


if(Number(pes.value.length) == 0 || Number(alt.value.length) == 0 || Number(age.value,length) == 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ||
 Number(pes.value) <1 ||Number(alt.value) <1 ){
    alert('Valor inválido ou campo em branco. Favor completar') 
}else{
    let pesN = Number(pes.value)
    let altN = parseFloat(alt.value)
    let soma = (pesN/(altN*altN))*10000
    let imc = soma.toFixed(2)
    resultado.innerHTML=''
    resultado.innerHTML += (`IMC = ${imc}<br/>`);

    if((sex[1].checked)){
        if(age.value<7 && imc >= 14.3 && imc<16.1){
            resultado.innerHTML += `Normal`
        }else if(age.value<7 &&  imc>=16.1 && imc < 17.4){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<7 &&  imc >= 17.4){
            resultado.innerHTML += `Obesidade Infantil`        
        }else if(age.value<8 && imc >= 14.9 && imc<17.1){
            resultado.innerHTML += `Normal`
        }else if(age.value<8 && imc >= 17.1 && imc < 18.9){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<8 &&  imc >= 18.9){
            resultado.innerHTML += `Obesidade Infantil`         
        }else if(age.value<9 && imc >= 15.6 && imc<18.1){
            resultado.innerHTML += `Normal`
        }else if(age.value<9 && imc >= 18.1 && imc < 20.3){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<9 &&  imc >= 20.3){
            resultado.innerHTML += `Obesidade Infantil` 
        }else if(age.value<10 && imc >= 16.3 && imc<19.1){
            resultado.innerHTML += `Normal`
        }else if(age.value<10 && imc >= 19.1 && imc < 21.7){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<10 &&  imc >= 21.7){
            resultado.innerHTML += `Obesidade Infantil` 
        }else if(age.value<11 && imc >= 17 && imc<20.1){
            resultado.innerHTML += `Normal`
        }else if(age.value<11 && imc >= 20.1 && imc < 23.2){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<11 &&  imc >= 23.2){
            resultado.innerHTML += `Obesidade Infantil` 
        }else if(age.value<12 && imc >= 17.6 && imc<21.1){
            resultado.innerHTML += `Normal`
        }else if(age.value<12 && imc >= 21.1 && imc < 24.5){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<12 &&  imc >= 24.5){
            resultado.innerHTML += `Obesidade Infantil` 
        }else if(age.value<13 && imc >= 18.3 && imc<22.1){
            resultado.innerHTML += `Normal`
        }else if(age.value<13 && imc >= 22.1 && imc < 25.9){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<13 &&  imc >= 25.9){
            resultado.innerHTML += `Obesidade Infantil` 
        }else if(age.value<14 && imc >= 18.9 && imc<23){
            resultado.innerHTML += `Normal`
        }else if(age.value<14 && imc >= 23 && imc < 27.7){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<14 &&  imc >= 27.7){
            resultado.innerHTML += `Obesidade Infantil` 
        }else if(age.value<15 && imc >= 19.3 && imc<23.8){
            resultado.innerHTML += `Normal`
        }else if(age.value<15 && imc >= 23.8 && imc < 27.9){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<15 &&  imc >= 27.9){
            resultado.innerHTML += `Obesidade Infantil` 
        }else if(age.value<16 && imc >= 19.6 && imc<24.2){
            resultado.innerHTML += `Normal`
        }else if(age.value<16 && imc >= 24.2 && imc < 28.8){
            resultado.innerHTML += `Sobrepeso`
        }else if(age.value<16 &&  imc >= 28.8){
            resultado.innerHTML += `Obesidade Infantil` 
        }

}
        if((sex[0].checked)){
            if(age.value<7 && imc >= 14.5 && imc<16.6){
                resultado.innerHTML += `Normal`
            }else if(age.value<7 &&  imc>=16.6 && imc < 18){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<7 &&  imc >= 18){
                resultado.innerHTML += `Obesidade Infantil`        
            }else if(age.value<8 && imc >= 15 && imc<17.3){
                resultado.innerHTML += `Normal`
            }else if(age.value<8 && imc >= 17.3 && imc < 19.1){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<8 &&  imc >= 19.1){
                resultado.innerHTML += `Obesidade Infantil`         
            }else if(age.value<9 && imc >= 15.6 && imc<16.7){
                resultado.innerHTML += `Normal`
            }else if(age.value<9 && imc >= 16.7 && imc < 20.3){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<9 &&  imc >= 20.3){
                resultado.innerHTML += `Obesidade Infantil` 
            }else if(age.value<10 && imc >= 16.1 && imc<18.8){
                resultado.innerHTML += `Normal`
            }else if(age.value<10 && imc >= 18.8 && imc < 21.4){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<10 &&  imc >= 21.4){
                resultado.innerHTML += `Obesidade Infantil` 
            }else if(age.value<11 && imc >= 16.7 && imc<19.6){
                resultado.innerHTML += `Normal`
            }else if(age.value<11 && imc >= 19.6 && imc < 22.5){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<11 &&  imc >= 22.5){
                resultado.innerHTML += `Obesidade Infantil` 
            }else if(age.value<12 && imc >= 17.2 && imc<20.3){
                resultado.innerHTML += `Normal`
            }else if(age.value<12 && imc >= 20.3 && imc < 23.7){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<12 &&  imc >= 23.7){
                resultado.innerHTML += `Obesidade Infantil` 
            }else if(age.value<13 && imc >= 17.8 && imc<21.1){
                resultado.innerHTML += `Normal`
            }else if(age.value<13 && imc >= 21.1 && imc < 24.8){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<13 &&  imc >= 24.8){
                resultado.innerHTML += `Obesidade Infantil` 
            }else if(age.value<14 && imc >= 18.5 && imc<21.9){
                resultado.innerHTML += `Normal`
            }else if(age.value<14 && imc >= 21.9 && imc < 25.9){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<14 &&  imc >= 25.9){
                resultado.innerHTML += `Obesidade Infantil` 
            }else if(age.value<15 && imc >= 19.2 && imc<22.7){
                resultado.innerHTML += `Normal`
            }else if(age.value<15 && imc >= 22.7 && imc < 26.9){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<15 &&  imc >= 26.9){
                resultado.innerHTML += `Obesidade Infantil` 
            }else if(age.value<16 && imc >= 19.9 && imc<23.6){
                resultado.innerHTML += `Normal`
            }else if(age.value<16 && imc >= 23.6 && imc < 27.7){
                resultado.innerHTML += `Sobrepeso`
            }else if(age.value<16 &&  imc >= 27.7){
                resultado.innerHTML += `Obesidade Infantil` 
            }
}
}
}




