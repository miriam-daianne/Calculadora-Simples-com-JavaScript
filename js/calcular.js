let visor = document.getElementById('visor');
let novoNum = true;
let numAnt = null;
let opAtual = null;
let numPost = null;


function inserirNum(num){
    if (novoNum) {
        visor.textContent += num;
        novoNum = false;
    } else {
        visor.textContent += num;
    }

    if(opAtual == null){
        numAnt = parseFloat(visor.textContent.replace(',', '.')); 
    }

    

    if (opAtual !== null) {
        numPost = parseFloat(visor.textContent.replace(',', '.')); 
    }
  }

function inserirOperador(op){
    if(numAnt === null && visor.textContent.trim()!== ''){
        numAnt = parseFloat(visor.textContent.replace(',','.'));
    }else if (numPost !==null){
        resultado();
        numAnt = parseFloat(visor.textContent.replace(',', '.'));
    }
   opAtual = op;
   visor.textContent += " " + op + " ";
   novoNum= true;
}

function clean(){
    visor.textContent = "";
    numAnt = null;
    numPost = null;
    opAtual = null;
    novoNum = true;
}

function apagarDigito(){
    visor.textContent = visor.textContent.slice(0, -1);
}

function inverterSinal(){

    let valor = parseFloat(visor.textContent.replace(',', '.'));
    if (!isNaN(valor)) {
        valor *= -1;
        visor.textContent = valor.toString().replace('.', ',');
        if (opAtual === null) {
            numAnt = valor;
        } else {
            numPost = valor;
        }
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
    if(numAnt !== null && numPost !== null || opAtual !== null){

        let resultado = 0;
         
        switch(opAtual){
            case '+':
                resultado = numAnt + numPost;
                break;
            case '-':
                resultado = numAnt - numPost;
                break;
            case '/':
                if(numPost === 0){
                    alert('Error: Divisão por zero é impossível!');
                    clean();
                    return;
                }
                resultado = numAnt / numPost;
                break;
            case '*':
                resultado = numAnt * numPost;
                break;
        }

        visor.textContent = resultado.toString().replace('.',',');
        numAnt = resultado;
        numPost =null;
        opAtual = null;
        novoNum = false;
    }
}



// não esta armazenando o valor após o operador, o numPost está armazenando com o numAnt
// não aceita dois numeros com virgulas (trocar visor com numAtual)
// trocar numPost por NumAtual
// ta aceitando 0, + etc