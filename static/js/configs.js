var alunos = document.getElementsByClassName("aln")

// Pegar atributo do elemento que foi clicado
$(document).on('click', '.aln', function () { 
  console.log($(this).attr("id"))
  Swal.fire({
    title: "Nome do aluno",
    icon: "info",
    html: `
      <p>Idade: 15</p>
      <p>Há quanto tempo na turma: 4 dias</p>
      <p>ID: 8392983</p>
      <button id="btn-del">Expulsar Membro</button>
    `
  })
})

