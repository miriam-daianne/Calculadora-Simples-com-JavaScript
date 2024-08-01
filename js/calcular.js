let visor = document.getElementById('visor');
let visorMemoria = document.getElementById('visorMemoria');
let novoNum = true;
let numAnterior = null;
let opAtual = null;
let numAtual = null;


function inserirNum(num) {
    if (novoNum) {
        visor.textContent = num;
        novoNum = false;
    } else {
        visor.textContent += num;
    }

    visorMemoria.textContent += num;

    numAtual = parseFloat(visor.textContent.replace(',', '.'));
}




if (numAtual !== null && opAtual !== null) {
    numAnterior = numAtual;
    numAtual = null;
    novoNum = true;
}



function inserirOperador(op) {
    let ultimoDigito = visor.textContent.slice(-1);

    if (ultimoDigito == ",") {
        return;
    }

    if (numAnterior !== null && numAtual !== null) {
        resultado();
        numAtual = parseFloat(visor.textContent.replace(',', '.'));
        numAnterior = null;
    }


    opAtual = op;
    visorMemoria.textContent += ' ' + op + ' ';
    novoNum = true;
}

function clean() {
    visor.textContent = '';
    numAnterior = null;
    numAtual = null;
    opAtual = null;
    novoNum = true;
    visorMemoria.textContent = '';
}

function apagarDigito() {
    visor.textContent = visor.textContent.slice(0, -1);
    visorMemoria.textContent = visorMemoria.textContent.slice(0, -1);
}

function inverterSinal() {

    let valor = parseFloat(visor.textContent.replace(',', '.'));
    if (!isNaN(valor)) {
        valor *= -1;
        visor.textContent = valor.toString().replace('.', ',');
        visorMemoria.textContent = valor;
    }
}

function virgula() {
    if (novoNum) {
        visor.textContent += "0,";
        novoNum = false;
        visorMemoria.textContent += "0,";
    } else if (!visor.textContent.includes(',')) {
        visor.textContent += ",";
        visorMemoria.textContent += ",";
    }


}

function resultado() {
    if (numAnterior !== null && numAtual !== null && opAtual !== null) {

        let resultadoOperacao = 0;

        switch (opAtual) {
            case '+':
                resultadoOperacao = numAnterior + numAtual;
                break;
            case '-':
                resultadoOperacao = numAnterior - numAtual;
                break;
            case '/':
                if (numAtual === 0) {
                    alert('Error: Divisão por zero é impossível!');
                    clean();
                    return;
                }
                resultadoOperacao = numAnterior / numAtual;
                break;
            case '*':
                resultadoOperacao = numAnterior * numAtual;
                break;
        }

        visor.textContent = resultadoOperacao.replace('.', ',');
        numAnterior = resultadoOperacao;
        numAtual = null;
        opAtual = null;
        novoNum = true;
    }
}



/* Problemas  */

//arrumar função resultado e verificar se os valores estão no parseflot certo 
// quando inverte sinal limpa a tela a partir do op limpando o visorMemoria