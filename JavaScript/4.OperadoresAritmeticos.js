// Este é o 4º arquivo de um total de 5 para anotações e estudos acerca de JS. Imagine que isso aqui é uma apostila interativa.

//********NOTA************ 
// Você pode executar os códigos dentro do proprio VSCODE utilizando da extensão do Code Runner, mas essa extensão não suporta alguns tipos de comandos,estruturas ou objetos, como aquelas que são executadas junto de um html, por exemplo.
    
// OPERADORES ARITMETICOS \\

// ADIÇÃO (+) - Soma os valores
// SUBTRAÇÃO (-) - Diferença entre os valores
// MULTIPLICAÇÃO (*) - Produto dos valores
// DIVISÃO (/) - Quociente dos valores
// MODULO (%) - Resto da divisão
// INCREMENTO (++) - Pré/pós Incremento -> O Incremento irá adicionar UMA UNIDADE a um valor já existente
// DECREMENTO (--) - Pré/pós Decremento -> O Decremento irá subtrair UMA UNIDADE a um valor já existente

var n1 = 10
var n2 = 5
    console.log ("A soma entre " + n1 + " e " + n2 + " equivale a: " + ( n1 + n2 ));
    console.log ("A subtração entre " + n1 + " e " + n2 + " equivale a: " + ( n1 - n2 ));
    console.log ("A multiplicação entre " + n1 + " e " + n2 + " equivale a: " + ( n1 * n2 ));
    console.log ("A divisão entre " + n1 + " e " + n2 + " equivale a: " + ( n1 / n2 ));
    console.log ("O modulo entre " + n1 + " e " + n2 + " equivale a: " + ( n1 % n2 ));

    // O Incremento e Decremento funcionam a nível de instrução partindo de uma das instruções: Pré-operação e Pós-operação; respectivamente pelas syntax: (++ N1) e (N1 ++)
    // A diferença entre pré e pós operação é que o incremento pré pode ser exposto ainda na instrução a qual o incremento está sendo realizado
    var n1 = 10    
    console.log ("O incremento de n1 é: " + (++ n1)); // Note que se o console for executado, o valor 11 será printado na tela
    // Agora, vamos supor que a nossa intenção é executar um incremento pós operação.

    var n1 = 10
    console.log (n1 ++); // -> Note que o console irá printar n1 como 10, mesmo com o operador de incremento executando sua função. Isso ocorre pelo fato do incremento ter sido executado APÓS a operação, de maneira que; seu novo valor será armazenado, mas não printado
    console.log (n1); // -> Se pedirmos um segundo print, o console irá expor o valor atualizado da váriavel, isto é, o seu novo valor; pós-incremento

    // DEIXANDO AS OPERAÇÕES ARITMETICAS MENOS VERBAIS  \\
    // Suponhamos que você queira fazer a seguinte operação aritmetica;
        
    var teste = 10 // a var NUM teste recebeu o valor 10
    console.log (teste = teste + 5); 
    
    // Há uma maneira de fazermos isto sem que haja a repetição de seu nome toda vez que esta sofrer uma mudança via operação aritmetica;
    
    var teste = 10
    //console.log (teste += 5); // Basta digitar a operação a ser realizada e colocar um = na frente do operador em questão. Caso queira verificar isto sendo executado em outras operações, apague o encapsulamento da respectiva operação e encapsule todas as outras anteriores
    //console.log (teste -= 5);
    //console.log (teste *= 5);
    //console.log (teste /= 5);
    //console.log (teste %= 5);
    
    // Isto também funciona para CONCATENAR elementos e STRINGS
    var saudacao = "Olá"
    console.log (saudacao += " fera"); 