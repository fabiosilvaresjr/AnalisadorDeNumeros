//alert ('Testando essa bagaça')

let valores = []
let analisando = false

function checarEnter(report) {
    // CORREÇÃO: O 'report' é a variável que você criou para o objeto de evento.
    
    // A lógica pergunta: O código da tecla que está no relatório é 13?
    if (report.keyCode === 13) { 
        adicionar(); // Se for 'sim' (13), chame a função principal
    }
    // Se não for a tecla 13, a função simplesmente termina.
}

function adicionar(){
    var inputElement = document.getElementById('numero')
    var numeroInput = inputElement.value
    var num = Number(numeroInput)
    var lista = document.getElementById('lista')
    
    function limparInput(){
        // Limpeza (UX)
        inputElement.value = ''; // Limpa o campo
        inputElement.focus();    // Coloca o cursor
    }
    
    if (analisando === true){
        alert('A analise já foi feita, se quiser fazer outra aperte Nova Anlálise')
        return;
    }
    if (num > 100|| num <= 0){
        alert('Insira um número válido e dentro da faixa de números recomendada!')
        limparInput()
        return;
    }
    else if (valores.indexOf(num) != -1) {
        alert('Valor já encontrado na lista.');
        limparInput()
        return;
    }
    else{
     // alert('muito bem, número aceito');
        valores.push(num)

        //Parte de adcionar números na lista
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado.`;
        lista.appendChild(item);

        limparInput()
        
    }
}

function resetarAnalise(){
    valores = [];
    analisando = false;
    lista.innerHTML= '<option>Adicione Números...</option>';
    res.innerHTML= ' '
    document.getElementById ('numero').focus();
}

function magica(){
    res.innerHTML = `` 
    analisando = true;
    if (valores.length === 0){ // se não tiver anda na lista
        alert('Adicione algum número a lista para a mágica acontecer!')
    }
    var quantidade = valores.length;
    var maior = valores [0]
    var soma = 0 
    var menor = valores [0]
    for (var cont = 0; cont < quantidade; cont ++){
        soma += valores[cont];
        if (valores[cont] > maior){
            maior = valores[cont]
        }
        if (valores[cont] < menor){
            menor = valores[cont]
        }
        
    }
    let media = soma / quantidade;
   
    res.innerHTML += `<p>A quantidade de números informados é de ${quantidade}!</p>`
    res.innerHTML += `<p>O maior número é o ${maior}.</p>`
    res.innerHTML += `<p>Enquanto que o menor número foi ${menor}</p>`
    res.innerHTML +=  `<p>A soma de todos os números da ${soma}</p>`
    res.innerHTML += `<p>Fazendo a média de todos eles temos ${media}</p>`
}