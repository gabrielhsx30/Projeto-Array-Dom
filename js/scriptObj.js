let mensagem = "", nomeAluno, numMatricula, cel, email, index, listaAlunos= "", listaProfessores=""; //variaveis globais
const professores = []; //criando array
const alunos = []; //criando array

//const professores2 = [
//  {
//   nome: "Pardal",
//   disciplina: "Ciências"
// },
// {
//      nome: "Girafales",
//    disciplina: "Português"
// },
//  {
//    nome: "Juquinha",
//     disciplina: "Lógica de Programação"
///  },
//  {
//     nome: "Raimundo",
//      disciplina: "História"
// }
//];






const prof1 = { //criando objetos
    nome: "Pardal",
    disciplina: "Matemática"
}
const prof2 = {
    nome: "Girafales",
    disciplina: "Português"
}
const prof3 = {
    nome: "Juquinha",
    disciplina: "Lógica de Programação"
}
const prof4 = {
    nome: "Raimundo",
    disciplina: "História"
}

//adicionando elementos ao Array | lista
professores.push(prof1); // 0
professores.push(prof2);
professores.push(prof3);
professores.push(prof4); // 3

//---------------------------------------------------------------

// Cada aluno terá nome, matricula, cel, email
for (let index = 0; index < 5; index++) {
    nomeAluno = prompt(`Digite o nome do ${index + 1}º aluno: `);
    numMatricula = prompt(`Digite o número de matricula do ${index + 1}º aluno: `);
    cel = prompt(`Digite o celular do ${index + 1}º aluno: `);
    email = prompt(`Digite o email do ${index + 1}º aluno: `);
    const aluno = { //criando objeto
        nome: nomeAluno,
        matricula: numMatricula, //matricula é um ojeto
        celular: cel,
        email: email
    };
    alunos.push(aluno); //adicionando objeto ao array
    console.log(alunos);

    
}

for (let index = 0; index < alunos.length; index++) {
    listaAlunos = `${listaAlunos} \nomeAluno
    Nome: ${alunos[index].nome} 
    Matrícula: ${alunos[index].matricula} 
     Celular: ${alunos[index].celular} 
    Email: ${alunos[index].email} --------------------`;
}
index = 0;
while (index < professores.length) {
    listaProfessores= `${listaProfessores} \n Nome: ${professores[index].nome} - Disciplina: ${professores[index].disciplina} \n`;
        index++;
    }
    alert(listaAlunos);
    alert(listaProfessores);

//console.log(professores);
//console.log(professores2);    
//