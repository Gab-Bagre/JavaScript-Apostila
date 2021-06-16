// Este é o 3º arquivo de um total de 5 para anotações e estudos acerca de JS. Imagine que isso aqui é uma apostila interativa.

//********NOTA************ 
// Você pode executar os códigos dentro do proprio VSCODE utilizando da extensão do Code Runner, mas essa extensão não suporta alguns tipos de comandos,estruturas ou objetos, como aquelas que são executadas junto de um html, por exemplo.
    
    //      CASTING         \\

    //Imagine que eu quero fazer a soma de dois valores numericos digitados por um usuário dentro de um prompt e printar o resultado

var N1 = prompt ("Digite um numero"); // -> Considere que o numero 20 foi escolhido pelo usuario
var N2 = prompt ("Digite outro numero"); // -> Considere que o numero 30 foi escolhido pelo usuario 
console.log (N1 + N2); // -> O que ocorrerá aqui será a concatenação dos elementos 20 e 30, printando no console -> 2030
// LEMBRE-SE, QUAISQUER VALORES DIGITADOS DENTRO DE UM PROMPT SÃO CONSIDERADOS COMO STRINGS, MESMO QUE ESTES MANTENHAM SEUS PESOS NUMERICOS. EM CASO DE DUVIDAS, LEIA A LINHA 51 DO ARQUIVO 1.Variaveis&Comandos.js

//Para executar uma operação aritmetica com os valores digitados no prompt, um casting será necessário, onde, troca-se o tipo das variaveis para outro

    var N1 = prompt ("Digite um numero"); // -> Considere que o numero 20 foi escolhido pelo usuario
    var N2 = prompt ("Digite outro numero"); // -> Considere que o numero 30 foi escolhido pelo usuario 
    N1 = parseInt (N1); // -> O parseInt alterará o tipo da variavel para INT
    N2 = parseInt (N2);
    console.log (N1 + N2); // -> O que ocorrerá aqui será a soma dos valores 20 e 30, printando no console -> 50
    
    // ********** NOTA *********** Existe ainda, o parseFloat que alterará o tipo da variável para FLOAT e o toString que alterará o tipo da variável para STRING

    var N1 = prompt ("Digite um numero"); // -> Considere que o numero 20 foi escolhido pelo usuario
    var N2 = prompt ("Digite outro numero"); // -> Considere que o numero 30 foi escolhido pelo usuario 
    console.log (N1.toString() + N2.toString()); // -> O que ocorrerá aqui será a concatenação dos elementos 20 e 30, printando no console -> 2030