// Este é o 2º arquivo de um total de 5 para anotações e estudos acerca de JS. Imagine que isso aqui é uma apostila interativa.

//********NOTA************ 
// Você pode executar os códigos dentro do proprio VSCODE utilizando da extensão do Code Runner, mas essa extensão não suporta alguns tipos de comandos,estruturas ou objetos, como aquelas que são executadas junto de um html, por exemplo.

//        OPERADORES COMPARATIVOS        \\

//Observe abaixo uma lista de operadores de comparação (condicionais), que são usados frequentemente para as estruturas comparativas

// Igual (==) - Verifica se os valores são IGUAIS
// Identico (===) - Verifica se os valores comparados são IGUAIS E DO MESMO TIPO
// Diferente (!=) - Verifica se os valores comparados são DIFERENTES
// Identico (!==) - Verifica se os valores comparados são DIFERENTES E DE TIPOS DIFERENTES
// Menor  (<) - Verifica se o valor da ESQUERDA É MENOR QUE O VALOR DA DIREITA
// Maior  (>) - Verifica se o valor da ESQUERDA É MAIOR QUE O VALOR DA DIREITA
// Menor ou igual  (<=) - Verifica se o valor da ESQUERDA É MENOR OU IGUAL QUE O VALOR DA DIREITA
// Maior ou igual (>=) - Verifica se o valor da ESQUERDA É MAIOR OU IGUAL QUE O VALOR DA DIREITA

//          ESTRUTURAS DE COMPARAÇÃO              \\
    if (2 == "2") { // -> Se a expressão comparativa for VERDADEIRA, a mensagem exposta será a do bloco IF
    console.log ("Entrou dentro do bloco if (Verdadeiro)"); 
} else { // -> Se a comparação for FALSA, o bloco else será executado logo em seguida
    console.log("Entrou dentro do bloco if (falso)"); 
}    // ******** Tente alterar os valores e operadores para mudar o que será exposto dentro do console **********

//          OPERADORES LÓGICOS           \\

// Lembra-se dos complementos das estruturas de comparação? IF (condição) e/ou. Eles são representados atraves de operadores dentro do JS

// E (&&) -> Representa verdadeiro se TODAS as expressões forem verdadeiras
// OU (||) -> Representa verdaadeiro se PELO MENOS UMA das expressões forem verdadeiras
// NEGAÇÃO (!) -> Inverte o resultado da expressão de comparação.


        //  AND  \\
if (2 == "2" && 2 === "2") { // -> Se TODAS as expressões comparativas forem VERDADEIRAS, a mensagem exposta será a do bloco de comando IF
    console.log ("Entrou dentro do bloco if (Verdadeiro)"); 
} else { 
    console.log("Entrou dentro do bloco if (falso)"); 
}    // ******** Tente alterar os valores e operadores para mudar o que será exposto dentro do console **********
// É necessário que TODAS as expressões dentro da estrutura sejam VERDADEIRAS para que o bloco de comando IF seja executado


//***********    NOTA    **************
// Podem existir N expressões dentro de uma estrutura de comparação.

     //   OR    \\
if (2 == "2" || 2 === "2") { // -> Se ao menos UMA das expressões comparativas forem verdadeiras, a mensagem exposta será a do bloco de comando IF
    console.log ("Entrou dentro do bloco if (verdadeiro)");
} else {
    console.log("Entrou dentro do bloco if (falso)");
     // ******** Tente alterar os valores e operadores para mudar o que será exposto dentro do console **********
}
    // É necessário que APENAS UMA das expressões dentro da estrutura comparativa seja VERDADEIRA para que o bloco de comando IF seja executado

    // NEGAÇÃO  \\
// A lógica do operador de negação é simples; Transformar TRUE em FALSE ou FALSE em TRUE

if (!(4 == 2)){ // Obviamente, 4 não é igual a 2, mas por estarmos utilizando o operador de negação, o FALSE será transformado em VERDADEIRO.
    console.log("VERDADEIRO");
 } else {
        console.log("FALSO"); // Teste executar

}

    //       ESTRUTURA SWITCH       \\
// A estrutura Switch funciona da mesma maneira que a estrutura IF/ELSE, com as exceções de que; só se pode executar comparações de IDÊNTICOS, sua syntax é diferente e caso haja a ausência da instrução break, todos os blocos serão executados

    var N1 = 2 // -> Note que atribuimos o valor numerico 2 para a variavel N1

    switch (N1) { // -> Aqui é onde inicia-se a estrutura do Switch considerando o valor atribuido anteriormente
    case 1: // -> Como o valor atribuido inicilamente é o numero 2, o case 1 não será executado, pois o comando Switch irá comparar o valor numerico da variavel com o valor numerico do case, pulando assim para o proximo case
        console.log ("Instrução 1");
        break

    case 2: // -> Obviamente, 2 === 2 (Identico, ou seja, igual em peso numerico e em tipo; NUM), logo, o CASE 2 será executado e printado no console
        console.log ("Instrução 2");    
        break // -> Caso o break seja removido da estrutura, todas as instruções dos cases seguintes serão executados até que não hajam mais cases ou até que a estrutura encontre um break

    case 3:
        console.log ("Instrução 3");    

    default: // -> o default funciona como o ELSE, então, na hipotese de nenhum CASE ser executado, o default será
        console.log ("Instrução padrão");    
    }
    //********** NOTA ************* CASO NÃO HAJA UMA ATRIBUIÇÃO DA VARIÁVEL DENTRO DO PRÓPRIO CODIGO, ISTO É, A VARIÁVEL SEJA ATRIBUÍDA PELO USUARIO ATRAVES DE UM REQUEST DE PROMPT, NADA SERÁ EXECUTADO, UMA VEZ QUE O SWITCH SÓ FAZ COMPARAÇÕES IDÊNTICAS. 
    //UMA FORMA DE RESOLVER ESTE PROBLEMA E EXECUTAR O SWITCH, É UTILIZAR O CASTING ---- CASTING PODE SER ENCONTRADO DENTRO DO ARQUIVO: 3.Casting. 
