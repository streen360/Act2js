// REalizar la actividad del indice de masa corporal subir actividad ya justarla para ello, tener claro que es y como debe de ser

// Función para calcular el IMC
function calcularIMC(peso, altura) {
    if (isNaN(peso) || isNaN(altura)) {
      return "Error: Los valores ingresados no son válidos.";
    }
    const imc = peso / (altura * altura);
    return imc;
  }
  
  // Función para mostrar el resultado
  function mostrarResultado(imc) {
    if (imc < 18.5) {
      console.log("Tu IMC es de " + imc + ". Tienes bajo peso.");
    } else if (imc >= 18.5 && imc < 24.9) {
      console.log("Tu IMC es de " + imc + ". Tienes un peso saludable.");
    } else if (imc >= 25 && imc < 29.9) {
      console.log("Tu IMC es de " + imc + ". Tienes sobrepeso.");
    } else {
      console.log("Tu IMC es de " + imc + ". Tienes obesidad.");
    }
  }
  
    // Valores preestablecidos
    const peso = 70; // Cambiar este valor para probar con diferentes pesos
    const altura = 1.7; // Cambiar este valor para probar con diferentes alturas
  
    // Calcular el IMC
    const imc = calcularIMC(peso, altura);
  
    // Mostrar el resultado
    mostrarResultado(imc);

  