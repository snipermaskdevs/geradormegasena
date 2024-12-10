function gerarNumeros() {
    const numeros = [];
    
    // Gerar 6 números aleatórios entre 1 e 60
    while (numeros.length < 6) {
        let num = Math.floor(Math.random() * 60) + 1;
        
        // Verifica se o número já foi gerado
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }
    
    // Exibe os números gerados no formato desejado
    document.getElementById("resultado").innerText = "Números sorteados: " + numeros.sort((a, b) => a - b).join(', ');
}
