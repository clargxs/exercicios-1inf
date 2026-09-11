// CRIE SUA SOLUÇÃO ABAIXO ================
const cliente  = "Mariana";
const sobrenome = "Silva";
const NomeCompleto = cliente+" "+sobrenome;
const cidade = "Fortaleza";
const produto = "Notebook Pro";
const categoria = "Notebook";
const quantidade = 2;
const descontoPercentual = 10;
const preco = 3500;
const valorPago = 7000;
const subtotal = preco*quantidade;
const desconto = (subtotal*descontoPercentual)/100;
const valorFinal = subtotal-desconto;
const troco = valorPago-valorFinal;
const resumo = `Cliente:${NomeCompleto}
Cidade:${cidade}
Produto:${produto}
Pategoria:${categoria}
Quantidade:${quantidade}
Preço:${preco}
Subtotal:${subtotal}
Desconto:${descontoPercentual}
Valor do desconto:${desconto}
Valor final:${valorFinal}
Valor pago:${valorPago}
Troco:${troco}`
console.log(resumo)




// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo
}
