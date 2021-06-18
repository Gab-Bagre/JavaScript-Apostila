// Este é o 5º arquivo de um total de 5 para anotações e estudos acerca de JS. Imagine que isso aqui é uma apostila interativa.

//********NOTA************ 
// Você pode executar os códigos dentro do proprio VSCODE utilizando da extensão do Code Runner, mas essa extensão não suporta alguns tipos de comandos,estruturas ou objetos, como aquelas que são executadas junto de um html, por exemplo.

// As funções são subprogramas que executam um ou mais blocos de codigo encapsulados

    //A syntax é bem simples; utiliza-se da palavra reservada function e em seguida, nomeia-se dita função seguindo as mesmas regras para nomear uma variável;
    function calcularAreaTerreno (largura, comprimento){ // -> Observe que dentro da syntax da função eu tenho dois parâmetros (Largura e comprimento). Estes parametros podem ser chamados de argumentos e são considerados como variaveis. Uma função pode ter N parametros
           //lógica de funcionamento da função
        var area = largura * comprimento // -> Perceba que nesta linha, a função é defenida como a operação de multiplicação entre dois parametros
      return area // -> O comando de return irá retornar e expor o valor da operação executada na função. --LEIA A LINHA 17--
    } 
    calcularAreaTerreno(15, 25); // -> Observe que nesta e na proxima linha, a função anteriormente declarada é chamada, e seus parametros receberam valores numericos
    var area = calcularAreaTerreno(15,25); 
    console.log ("o terreno possui uma área de " + area +" m²" );    
    // O comando return funciona de maneira que; O programa irá executar linha por linha, e quando chegar no return dentro do escopo da função, esta linha será PULADA e retomada APENAS quando a sua respectiva função for finalizada dentro do código e fora do escopo. 
    // O return pode ser substituido pelo comando void, ou pode estar ausente no código, caso não haja a necessidade de retornar um valor
    // Tente trocar o return exposto na linha 12 por void e execute o código.
                // Os comandos return e void não precisam estar dentro do escopo da função, eles podem ficar em qualquer linha do código, mas é uma boa prática deixa-las dentro do escopo de suas respectivas funções

                    //      FLEXIBILIDADE DE PARAMETROS     \\

    //Considere a função abaixo:

    function soma (a,b){
        return a + b
    }
        console.log (soma(10,10));
        console.log (soma(10,10,50,100)); // -> Note que este console.log irá expor o número 20. Isso ocorre porque, o JS irá executar a função utilizando APENAS dos parametros estabelecidos pela própria função
    
    
    
                 //       FUNÇÕES ANONIMAS E WRAPPER        \\

        // O recurso de WRAPPER permite atribuir funções como var's 
        var saudacao = function (nome) { // -> NOTE QUE A FUNÇÃO NÃO TEM NOME
            console.log ("olá " + nome + ", tudo bem?"); 
        } // -> até aqui, a função foi declarada e seu escopo chegou ao fim
        saudacao ("Fera") // -> Atribuição para o parametro nome.
        // Esta tecnica é utilizada quando não se sabe o que a função irá fazer e permite ainda, executar um callback desta função no futuro - CONFIRA O ARQUIVO 6.CALLBACK.HTML
        


