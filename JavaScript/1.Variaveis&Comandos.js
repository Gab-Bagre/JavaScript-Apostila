// Este é o 1º arquivo de um total de 5 para anotações e estudos acerca de JS. Imagine que isso aqui é uma apostila interativa.

//********NOTA************ 
// Você pode executar os códigos dentro do proprio VSCODE utilizando da extensão do Code Runner, mas essa extensão não suporta alguns tipos de comandos,estruturas ou objetos, como aquelas que são executadas junto de um html, por exemplo.



//         FUNÇÕES e OBJETOS            \\
// alert () -> Irá abrir uma alert box, um pop up.
// console.log () -> printa o que está entre () dentro do console e é usado para debug .
// document.write () -> Objeto que representa o DOM.
// O document.write pode ser usado como um método para escrever valores dentro do navegador. 
// O document.write faz a interação de JS -> HTML, observe; 
// var nome = "Fera"
// document.write("<h1> Olá," + nome + ", tudo bem? </h1>"); <- Note que aqui, o + é usado para concatenar o texto livre com a string
// considerando que o document.write fora executado dentro de um arquivo html, O h1 da página será exposto com a frase -> "Olá Fera, tudo bem?"
// A grosso modo, se você quer printar algo no console, use console.log
// Se você quer printar algo na tela do browser, use document.write dentro da tag que lhe seja conveniente

//             CONCATENAÇÃO             \\
// A concatenação é feita com o uso do operador + para unir as variáveis com os textos encapsulados, conforme o exemplo acima



//            VARIAVEIS             \\

// String -> textos
var texto = " curso de javascript"
console.log (texto); //A leitura será da VARIÁVEL texto, atribuida com a string "curso de javascript"
console.log ("texto"); // A leitura feita será dos caracteres encapsulados; "texto"

// Number -> é qualquer número; seja negativo, fracionário ou inteiro
var numeroInteiro = -10 // EM JS NÃO É NECESSÁRIA A ATRIBUIÇÃO FLOAT OU INT
var numeroFracionado = 232.777 
var n1 = 10
var n2 = 30
console.log (numeroInteiro);
console.log (numeroFracionado);
console.log (n1 + n2); // troque os operadores aqui para explorar

// Boolean -> true or false
var verdadeiro = true // O JS entende que é uma variável de tipo Booleano
var falso = false

// Prompt -> Atribuição de vaiavel pelo usuário
//var nome = prompt ("Digite seu nome"); // -> Um prompt de inserção irá requisitar que o usuário escreva seu nome. Vamos considerar o nome Maria.
//var idade = prompt ("Digite sua idade");// ->  Um prompt de inserção irá requisitar que o usuário escreva sua idade. Vamos considerar 30 anos.
//********* NOTA ******** Todo número digitado nos prompts será considerado como STRING, E NÃO NUMBER. ENTRETANTO, o JS entende o peso numerico de uma STRING que representa um valor numerico. Em outras palavras, ele entende que "7" equivale a 7 em peso numerico. Por outro lado, enquanto o JS compreende que a STRING "7" tem o peso numerico do algarismo 7; se utilizarmos um operador de função aritmetica como o - ou o +, o que ocorrerá será a CONCATENAÇÃO DOS ELEMENTOS,
document.write ("<h1> Olá," + nome + ", vi que você tem " + idade "</h1>") // -> Será exposto no navegador -> Olá, Maria, vi que você tem 30 anos. 

// NULL -> Variável com um valor indefinido PROPOSITALMENTE
var Nulo = null
console.log (Nulo);

//Undefined -> É uma variável que não está disponível. Ela naturalmente não existe.
var Indefinido // -> Para atribuir uma variável como indefinida, basta não atribuir nada nela.
console.log (Indefinido); 
// ************ NOTA ***************
// Toda variável pode ser alterada, de maneira que, uma variável pode iniciar como nula e tornar-se uma string, boole ou number de acordo com o que está sendo executado no code.


// Partindo do conceito de que; dentro do JS, toda variável pode ser alterada, e este conceito seja de vosso interesse, considere estudar o arquivo -> 3.Casting.js





     