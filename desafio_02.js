const empresa ={
    nome: "Rocketseat",
    endereço:{
        rua: "Rua Guilherme Gembala",
        numero:"nº 260",
    },
    cor: "Roxo",
    foco: "Programação"
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`);

const usuario = "Diego";
const idade = 28;
const tecnologias = [
    { nome:"C++",
    especialidade:"Desktop", 
    },
    { nome:"Pyton",
    especialidade:"Data Science",
    },
    { nome:"JavaScript",
    especialidade:"Web/Mobile",
    },
];

console.log(`O usuário ${usuario} tem ${idade} anos e usa a tecnologia ${tecnologias[0].nome} com especialidade em 
${tecnologias[0].especialidade}`);