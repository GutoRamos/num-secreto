alert('Bem Vindo ao jogo do Número Secreto!!!!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let cuhte;
let tentativas= 1;

// Enquanto i chute não for igual a número secreto
while (cuhte != numeroSecreto){
    cuhte =prompt('Escolha um número entre 1 e ' + numeroMaximo);
// se chute for iguala ao numeroSecreto
    if(cuhte == numeroSecreto){
        break;
        
    } else{
        if (cuhte > numeroSecreto){
            alert('o número secreto é menor que ' + cuhte);
        }else{
            alert('o número secreto é maior que ' + cuhte);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert('isso ai! Voce descobriu que o número secreto era o ' + numeroSecreto + ' com ' + tentativas + '  ' + PalavraTentativa);
//if(tentativas > 1){
//    alert('isso ai! Voce descobriu que o número secreto era o ' + numeroSecreto + ' com ' + tentativas + ' tentativas');
//} else{
//    alert('isso ai! Voce descobriu que o número secreto era o ' + numeroSecreto + ' com ' + tentativas + ' tentativa');
//}