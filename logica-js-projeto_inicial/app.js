alert('Bem Vindo ao jogo do Número Secreto!!!!');

let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let cuhte;
let tentativas = 0;  // Inicializa o contador de tentativas em 0

// Loop principal do jogo
while (cuhte != numeroSecreto) {
    tentativas++;  // Incrementa o contador de tentativas
    if (tentativas > 20) {
        // Se exceder 20 tentativas, mostra mensagem de derrota e pergunta se deseja reiniciar
        let reiniciar = confirm('Você excedeu o limite de 20 tentativas! Deseja reiniciar o jogo?');
        if (reiniciar) {
            // Reinicia o jogo
            tentativas = 0;
            numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
            console.log(numeroSecreto);
            continue;  // Reinicia o loop
        } else {
            // Se não quiser reiniciar, encerra o jogo
            alert('O jogo acabou. O número secreto era: ' + numeroSecreto);
            break;
        }
    }

    cuhte = prompt('Escolha um número entre 1 e ' + numeroMaximo);

    if (cuhte == numeroSecreto) {
        break;
    } else {
        if (cuhte > numeroSecreto) {
            alert('O número secreto é menor que ' + cuhte);
        } else {
            alert('O número secreto é maior que ' + cuhte);
        }
    }
}

if (cuhte == numeroSecreto) {
    let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert('Isso aí! Você descobriu que o número secreto era o ' + numeroSecreto + ' com ' + tentativas + ' ' + PalavraTentativa);
}
 