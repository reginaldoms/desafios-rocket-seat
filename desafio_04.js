const pessoas = [
    {
        nome: "Salvio",
        receitas: [
            100,
        ],
        despesas: [
           15,
        ],
    },
    {
        nome: "Marcio",
        receitas:[
            24.6,
            214.3,
            45.3
        ],
        despesas:[
            185.3,
            12.1,
            120.0
        ],
    },
    {
        nome:"Lucia",
        receitas:[
            9.8,
            120.3,
            340.2,
            45.3
        ],
        despesas: [
            450.2,
            29.9
        ],
    },
];

let saldo = 0;
let posicao = ""
for (let i = 0; i < pessoas.length; i++) {
    saldo = calculaSaldo(pessoas[i].receitas, pessoas[i].despesas);
    if(saldo >= 0){ 
        posicao = 'Positivo'
    } else {
        posicao = 'Negativo'
    };
    console.log(`${pessoas[i].nome} possui saldo ${posicao} de ${saldo}`);
}




function calculaSaldo(receitas, despesas) {
    const totalReceitas = somaNumeros(receitas);
    const totalDespesas = somaNumeros(despesas);
    const saldo = totalReceitas - totalDespesas;

    return saldo;    
};

function somaNumeros(numeros) {
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    } 
    return soma;     
};
