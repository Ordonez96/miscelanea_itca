//EJERCICIO UNO IZI
function contrasena_valida(){
    var t_password = document.getElementById("id_contrasenia").value;
    //alert("entra brou")
    //validacion de entrada vacia
    if ( t_password.trim() === ""){
        alert("INGRESA UNA CONTRASEÑA BROU!!!!!!");
        return;
    }
    //compara la contraseña ingresada con las dos opciones correctas
    if (t_password == "2FjjjbFsuj" || t_password == "eoZiugBf&g9")
        {
            alert("QUE CRACK BROU, TODO EN ORDEN, TRUEEEE!!!!")
        }
    else{
            alert("LA CONTRASEÑA NO COINCIDE BROU, FALSE!!!")
        }
}

//EJERCICIO DOS IZI
function calcular_impuestos(edad,ingreso){
    var impuesto_c = 0.40;
    //var t_edad = parseInt( document.getElementById("id_edad").value);
    //var t_ingreso = parseFloat(document.getElementById("id_ingreso").value);

    //validacion de entrada de edad
    if(edad.trim() === "" || edad < 0){
        alert("INGRESA UNA EDAD VALIDA CRACK!!!!")
        return
    }
    //validacion de entrada de ingreso
    if(ingreso.trim()==="" || ingreso < 0){
        alert("TIENE QUE HABER UN VALOR DE INGRESO VALIDO!!!");
        return;
    }

    //Logica
    if(edad >18 && ingreso >=  1000){
        let impuesto_t = ingreso * impuesto_c;
        alert("El impuesto a pagar es de $" + impuesto_t);
    }
    else{
        alert("El impuesto a pagar es de $" + 0);
        }
    return;
}

//EJERCICIO TTRES; NO ESTIENDO ESTA WEA PERO FUNCIONA RECIO 
 function bim(peso, altura){
    //no aseguramos de recibir numeros y no string 

    var bim = 0;
    //validacion de entrada
    if (peso.trim() === "" || peso < 0){
        alert("BROU INGRESA UN PESO VALIDO")
        return;
    }
    if (altura.trim() ==="" || altura <= 0){
        alert("MI COMPA, INGRESE UNA ALTURA COHERENTE")
        return;
    }
    //logica
    var m_peso = parseFloat(peso.trim());
    var m_altura = parseFloat(altura.trim());
    bim = m_peso / (m_altura * m_altura);
    if (bim < 18.5){
        alert("BROU; ESTAS BAJO DE PESO")
        }    else if (bim >= 18.5 && bim <= 24.9){
                alert("BROU; TODO NORMAL")
                } else if (bim >= 25 && bim <= 29.9){
                    alert("BROU; TENES SOBREPESO")
                        } else if (bim >= 30){
                            alert("BROU; ESTAS OBESO")
                                }    return;
 }

 //EJERCIO CUATRO 
 function imprimir_arreglo() {

    let entrada = document.getElementById('id_texto').value;
    if (entrada.trim() === ""){
        alert("Digite un texto")
        return;
    }
    let nuevo_arreglo = entrada.split(' ').map(function(item) {
        return item.trim();
    });
    alert(nuevo_arreglo)
}

//EJERCICIO LIKES
function likes(num){
    //validacion
    if (num.trim() === ""){
        alert("Ingresa un numero brou")
        return;
    }
    //logica
    if (num < 1000){
            return alert(num.toString());
        }else if (num < 1000000){
            let result = num / 1000;
            return alert(result.toFixed(0) + "K");
        }else {
            let result = num / 1000000;
            return alert(result.toFixed(0) + "M");
        }
}
// FIZZBUZZ

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else {
        return numero.toString();
    }
}
function mostrarResultado() {
    const numero = document.getElementById("id_numero").value;
    const resultado = fizzBuzz(Number(numero));
    alert("EL RESULTADO ES: " + resultado);
}

//CONTEO DE RANGO 
function contarRango(num1, num2) {
    let contador = 0;
    for (let i = num1 + 1; i < num2; i++) {
        contador++;
    }
    return contador;
}

function calcularRango(event) {
    event.preventDefault(); 
    const num1 = parseInt(document.getElementById("id_numuno").value);
    const num2 = parseInt(document.getElementById("id_numdos").value);
    const resultado = contarRango(num1, num2);
    alert("Cantidad de números entre " + num1 + " y " + num2 + "es: " + resultado);
}

// SUMA DE RANGOS 

function sumarRango(inicial, final) {
    let Suma = 0;
    for (let Numero = inicial; Numero <= final; Numero++) {
        Suma += Numero;
    }
    return Suma;
}

function calcularSuma() {
    const inicial = parseInt(document.getElementById("id_inicial").value);
    const final = parseInt(document.getElementById("id_final").value);
    if (inicial <= final) {
        const resultado = sumarRango(inicial, final);
        alert( "Su suma es: " + resultado);
    } else {
       alert("Su número inicial debe ser menor o igual al número final.")   ;
    }
}

// AES

function numeroDeA(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a' || texto[i] === 'A') {
            contador++;
        }
    }
    return contador;
}

function contar_A() {
    const texto = document.getElementById('texto').value;
    const resultado = numeroDeA(texto);
    alert("La letra A aparece " + resultado + " veces en el texto");
}

//CONTEO DE CARACTERES
function numeroDeCaracteres(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

function contarCaracteres(event) {
    event.preventDefault();
    const cadena = document.getElementById("cadena").value;
    const caracter = document.getElementById("caracter").value;
    const resultado = numeroDeCaracteres(cadena, caracter);
    alert("El carácter " + caracter +" aparece "+ resultado+" veces");
}



 //EJERCICIO 11 SUMAR ARREGLO
 function sumar_arreglo() {
    //validacion de empty 
    let array = document.getElementById("id_arreglo_ingresado").value;
    if (array.trim() === ""){
        alert("TIENES QUE DIGITAR UN ARRAY BRO")
        return;
    }
    let numeros = array.split(",").map(Number);
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    return alert("LA SUMA DE LOS DATOS ES:" + suma);
}

 //EJERCICIO 12 MULTIPLICAR ARREGLO
 function multi_array() {
    let array_m = document.getElementById("id_arreglo_ingresado").value;
    if (array_m.trim() === ""){
        alert("TIENES QUE DIGITAR UN ARRAY BRO")
        return;
    }
    let numeros_m = array_m.split(",").map(Number);
    let result= numeros_m.reduce((acc, num) => acc * num, 1);
    return alert("LA MULTIPLICACION DE LOS DATOS ES:" + result);
}

 //EJERCICIO 13 QUITAR CEROS DE UN ARREGLO
 function remove_cero() {
    let array_c = document.getElementById("id_arreglo_ingresado").value;
    if (array_c.trim() === ""){
        alert("TIENES QUE DIGITAR UN ARRAY BRO")
        return;
    }
    let numeros_c = array_c.split(",").map(Number);
    let remove_ceros = numeros_c.filter(num => num !== 0);
    return alert(remove_ceros);
}

 //EJERCICIO 14 SUMAR ARREGLO ENTRE EL RANGO
 function sum_array_rango(arr, posInicial, posFinal) {
    // Inicializar la suma en 0
    let suma = 0;
     // Recorrer el arreglo desde posInicial hasta posFinal (incluyendo ambas posiciones)
     for (let i = posInicial; i <= posFinal; i++) {
        suma += arr[i];
    }
        // Retornar la suma calculada
        return suma;
}

function sum_array() {
    let array_s = document.getElementById("id_arreglo_ingresado").value;
    if (array_s.trim() === ""){
        alert("TIENES QUE DIGITAR UN ARRAY BRO")
        return;
    }
    let numeros = array_s.split(",").map(Number);
     // Pedir al usuario que ingrese las posiciones inicial y final
     let posInicial = parseInt(prompt("Ingresa la posición inicial:"));
     let posFinal = parseInt(prompt("Ingresa la posición final:"));
     // Llamar a la función sumarArreglo y mostrar el resultado
     let resultado = sum_array_rango(numeros, posInicial, posFinal);
     return alert("EL RESULTADO DEL RANGO ES: " +resultado);
}

 //EJERCICIO 15 TRANSCRIPCIÓN DE CADENAS ADN A ARN
 function transcribir(adn) {
    // Crear un objeto para los complementos de ADN a ARN
    const complementos = {
       'G': 'C',
       'C': 'G',
       'T': 'A',
       'A': 'U'
   };
   
    // Inicializar una variable para el ARN resultante
    let arn = '';
   
    // Recorrer cada carácter en la cadena de ADN y obtener su complemento
    for (let i = 0; i < adn.length; i++) {
        let nucleotido = adn[i];
        arn += complementos[nucleotido] || '';
    }
    return arn;
   }
   
   function transcribir_a() {
   let cadena_adn = document.getElementById("id_adn_ingresado").value;
   if (cadena_adn.trim() === ""){
    alert("TIENES QUE DIGITAR UN ARRAY BRO")
    return;
}
   let resultado = transcribir(cadena_adn);
   return alert("RESULTADO DE LA OPERACION:     " + resultado);
   
   }
//CAP PALABRAS 

function capitalizarPrimeraLetra(frase) {
    frase = frase.split(' ');

    for (let i = 0; i < frase.length; ++i) {
        frase[i] = frase[i][0].toUpperCase() + frase[i].substring(1);
    }

    return frase.join(' ');
}

function cap_palabra() {
    let inputFrase = document.getElementById("id_frase").value;
    if(inputFrase.trim() === ""){
        alert("Che, hay que escribir algo");
        return;
    }
    let resultado = capitalizarPrimeraLetra(inputFrase);
    alert ("CHE, La frase arreglada queda asi: " + resultado);
}





   //EJERCICIO BUSCA MAXIMO
   function busq_max(){
    const numeros = document.getElementById("id_num").value;
    if (numeros.trim() === ""){
        alert("CHE, TENES QUE INGRESAR MINIMO UN NUMERO");
        return;
    }
        //alert("entrra")
        var num_array = numeros.split(",").map(num => parseInt(num.trim(), 10));
        //alert("entra brou")
        var result = max(num_array);
        //alert("entrra")
        alert("El numero maximo es: " + result);
   }
   function max(arr) {
        if (arr.length === 0) {
            return alert("Indefinido che");
        }

        let num_max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > num_max) {
                num_max = arr[i];
            }
        }

        return num_max;
    }

    //BUSQUEDA DE VALOR MINIMO 
    function busq_min() {
        var num_b = document.getElementById('id_num').value;
        if (num_b.trim() === ""){
            alert("CHE, TENES QUE INGRESAR MINIMO UN NUMERO");
            return;
        }
        var num_array = num_b.split(',').map(num => parseFloat(num.trim()));
        var result = min(num_array);
        alert("EL NUMERO MINIMO ENCONTRADO ES: " + result);
        alert("CHE, YA VAS APRENDIENDO");

    }
    function min(arr) {
        if (arr.length === 0) {
            return undefined;
        }

        let num_min = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < num_min) {
                num_min = arr[i];
            }
        }

        return num_min;
    }

    //CONTRASEÑAS 
    function password(str) {
        // Convierte todas las mayúsculas a minúsculas
        let resultado = str.toLowerCase();
          
        // Elimina todos los espacios en blanco
        resultado = resultado.replace(/\s/g, '');
        
        // Reemplaza los caracteres según las reglas dadas
        resultado = resultado.replace(/a/g, '4')
                       .replace(/e/g, '3')
                       .replace(/i/g, '1')
                       .replace(/o/g, '0');
        
        return resultado;
      }
      
      function ejecutar_password() {
        var string_ingresada = document.getElementById('id_cadena_ingresada').value;
          if (string_ingresada.trim() === " "){
            alert("CHE, ESTO ESTA VACIO");
            return;
          }
          var resultadofinal = password(string_ingresada);
          return alert(resultadofinal);
          
          }
      