function compareDoisNumeros(numA, numB){

    if(!numA || !numB) return console.log("Defina dois numeros, diferente de ZERO!!!")
     
    let montaString;
    const soma = numA + numB ;
    const numerosIguais = numA === numB
    const maiorQue10 = soma>10;
    const maiorQue20 = soma>20;

    (numerosIguais)
     ? montaString = `Os números ${numA} e ${numB} são iguais.`
     : montaString = `Os números ${numA} e ${numB} não são iguais.`;
    
    (maiorQue10)
     ?  montaString += ` Sua soma é ${soma}, que é maior que 10`
     :  montaString += ` Sua soma é ${soma}, que é menor que 10` ;
     
    (maiorQue20)
     ? montaString += ` e maior que 20.`
     : montaString += ` e menor que 20.` ;

    console.log(montaString)
}

compareDoisNumeros();