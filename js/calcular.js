let visor = document.getElementById('visor');
let novoNum = true;
let numAnt = null;
let opAtual = null;
let numPost = null;

function inserirNum(num){
    if(numAnt && opAtual === null){
        numAnt = num;
    }else if(numAnt && opAtual !== null){
        numPost = num;
    }
    visor.textContent += num;
    novoNum = false;
}

function inserirOperador(op){
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
    visor.textContent = visor.textContent*(-1);
    // melhorar isso aqui 
}

function virgula(){

    if(novoNum == true){
        if(numAnt !== null){

        }
    }
    
}


/*
- se for o numAnt (que está sendo analisado) então o novoNum é true, ou seja, esse numero sendo inserido é o numero novo 

- se numAnt  diferente de null
    se numAnt == 0 -> "0,"
    se numAnt !== 0 -> verifica se há virgula
      se sim -> não põe
       se não -> +","


       

- varre o numAnt para ver se há virgula,
  se sim -> não põe
  se não ->
      - varrer o numAnt para saber se há digito
          se for diferente de zero -> põe +","
          se for igual a zero -> põe "0,"


*/


/*
function virgula()

cada conjunto de números antes do operador é uma unidade de números 

verificar se nessa unidade de número há virgulas

se sim → não põe vírgula

se não → 

verificar se há algum número nessa unidade

se sim → põe “0,”

se não → põe “,”

*/