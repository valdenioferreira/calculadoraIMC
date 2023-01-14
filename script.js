function calculateIMC(peso, altura) {
  let bmi = peso / (altura * altura);
  return bmi.toFixed(2);
}

var peso = prompt("Digite seu peso")
var altura = prompt("Digite sua altura");

var resultado = calculateIMC(peso,altura)
console.log(resultado)
if (resultado < 18) {
  console.log("Baixo peso")
}else if (resultado < 25 && resultado > 18) {
  console.log("Normal")
}else if (resultado < 30 && resultado > 25) {
  console.log("Sobrepeso")
}else{
  console.log("Obesidade")
}