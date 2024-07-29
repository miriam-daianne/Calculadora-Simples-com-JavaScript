let visor = document.getElementById('visor');
let visorMemoria = document.getElementById('visorMemoria');
let novoNum = true;
let numAnterior = null;
let opAtual = null;
let numAtual = null;


function inserirNum(num){
    if (novoNum) {
        visor.textContent = num;
        // visorMemoria.textContent += num;
        novoNum = false;
    } else {
        visor.textContent += num;
        // visorMemoria.textContent += num;
    }
}
    
    numAtual = parseFloat(visor.textContent.replace(',', '.'));
    
    

    if(numAtual !== null && opAtual !== null){
        numAnterior = numAtual;
        numAtual = null;
        novoNum = true;
    }
    

function inserirOperador(op){
    let ultimoDigito = visor.textContent.slice(-1);
    
    if(ultimoDigito == ","){
        return;
    }

    if(numAnterior !== null && numAtual !== null){
        resultado();
        numAtual = parseFloat(visor.textContent.replace(',','.'));
        numAnterior = null;
    }


    opAtual = op;
    visorMemoria.textContent += ' ' + op + ' ';
    novoNum = true;
}

function clean(){
    visor.textContent = '';
    numAnterior = null;
    numAtual = null;
    opAtual = null;
    novoNum = true;
    visorMemoria.textContent = '';
}

function apagarDigito(){
    visor.textContent = visor.textContent.slice(0, -1);
}

function inverterSinal(){

    let valor = parseFloat(visor.textContent.replace(',', '.'));
    if (!isNaN(valor)) {
        valor *= -1;
        visor.textContent = valor.toString().replace('.', ',');
    }
}

function virgula(){
    if (novoNum) {
        visor.textContent += "0,";
        novoNum = false;
    } else if (!visor.textContent.includes(',')) {
        visor.textContent += ",";
    }
}

function resultado (){
    if(numAnterior !== null && numAtual !== null || opAtual !== null){

        let resultado = 0;
         
        switch(opAtual){
            case '+':
                resultado = numAnterior + numAtual;
                break;
            case '-':
                resultado = numAnterior - numAtual;
                break;
            case '/':
                if(numAtual === 0){
                    alert('Error: Divisão por zero é impossível!');
                    clean();
                    return;
                }
                resultado = numAnterior / numAtual;
                break;
            case '*':
                resultado = numAnterior * numAtual;
                break;
        }

        visor.textContent = resultado.toString().replace('.',',');
        numAnterior = resultado;
        numAtual =null;
        opAtual = null;
        novoNum = false;
    }
}



/* Problemas atuais  */

/*
- colocar os valores ja armazenados nas variáveis no visorMenor
- arrumar função resultado

*/