let alunoDaVez, listaDeAlunos ="", listaProfessores="", contador=0;
//Criando um array populado
const professores = ["Prof. Pardal", "Prof. Girafales", "Prof. Juquinha", "Prof. Raimundo"];
//Criando um array vazio
const alunos = [];

// aluno1 = prompt("Digite o nome do 1° aluno:");
// aluno2 = prompt("Digite o nome do 2° aluno:");
// aluno3 = prompt("Digite o nome do 3° aluno:");
// aluno4 = prompt("Digite o nome do 4° aluno:");
// aluno5 = prompt("Digite o nome do 5° aluno:");
for (let index = 0; index < 5; index++) {
    alunoDaVez = prompt(`Digite o nome do ${index + 1}° aluno:`);
    alunos.push(alunoDaVez);
}

// listaDeAlunos=
// `Nome: ${aluno1}
// Nome: ${aluno2}
// Nome: ${aluno3}
// Nome: ${aluno4}
// Nome: ${aluno5}`;
for (let index = 0; index < alunos.length; index++) {
    listaDeAlunos = `${listaDeAlunos} \n ${alunos[index]}`;
}

while (contador<professores.length) {
    listaProfessores=` ${listaProfessores} \n id: ${contador+1} - Nome: ${professores[contador]}`;
    contador++;
}
alert(listaDeAlunos);
alert(listaProfessores);