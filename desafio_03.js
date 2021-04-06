const usuarios = [
    { 
        name:"Jóse",
        tecnologias: [
            "HTML", 
            "CSS"
        ]
    },
    { 
        name:"Silva",
        tecnologias: [
            "CSS", 
            "JavaScript"
        ]
    },
    {
         name:"Carlos",
        tecnologias: [
            "HTML", 
            "PHP"
        ]
    },
    { 
        name:"Ana",
        tecnologias: [
            "Node.JS", 
            "CSS"
        ]
    }
];


function checaSeUsuarioUsaCSS(tecnologias) {
    let trabalhaComCss = false;

    for(let i = 0; i < tecnologias.length; i++) {
       if(tecnologias[i] === "CSS"){
            trabalhaComCss =  true;
       }
    }

    return trabalhaComCss;
};

let trabalhaComCSS = false;
for(let i = 0; i < usuarios.length; i++){
    trabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i].tecnologias);
    
    if(trabalhaComCSS){
        console.log(`${usuarios[i].name} trabalha com CSS`);
    }
}



