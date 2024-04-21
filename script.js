var form = document.querySelector("form")

form.addEventListener("submit", function(event) {
  event.preventDefault()

  verificacao()
});

function verificacao(){
  let nome = document.querySelector("#inome").value
  let email = document.querySelector("#iemail").value
  let assunto = document.querySelector("#iassunto").value
  let mensagem = document.querySelector("#imensagem").value
  let temEmail = 0

  if(nome == ""){
    alert("Campo nome está vazio.")
    return
  }
  else if(nome.length >= 50){
    alert("Campo nome tem mais de 50 caracteres.")
    return
  }

  if(email == ""){
    alert("Campo email está vazio.")
    return
  }

  for(let i = 0; i < email.length; i++){
    if(email[i] == "@"){
      temEmail++
    }
  }

  if(temEmail == 0){
    alert("Campo email está errado.")
    return
  }

  if(assunto == ""){
    alert("Campo assunto está vazio.")
    return
  }
  else if(assunto.length >= 50){
    alert("Campo assunto tem mais de 50 caracteres.")
    return
  }

  if(mensagem == ""){
    alert("Campo mensagem está vazio.")
    return
  }
  else if(mensagem.length >= 300){
    alert("Campo mensagem tem mais de 300 caracteres.")
    return
  }

  form.submit()
}
