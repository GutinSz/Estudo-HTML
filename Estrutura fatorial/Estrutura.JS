function fatorial(){
    var numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
  
    if (numero < 0){
      resultado.textContent = "Fatorial não pode ser negativo"; // mensagem que vai aparecer na tela
    } else {
        let fat = 1;
        for (let i = 1; i <= numero; i++){
            fat *= i;
        }
      
        resultado.textContent = `O fatorial de ${numero} é ${fat}`
    }
  }