//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
  let Amigo = document.getElementById("amigo").value
  if(Amigo == ""){
    alert("Por favor, insira um nome.")
  }else{
    amigos.push(Amigo)
    document.getElementById("amigo").value = ""
    document.getElementById("listaAmigos").innerHTML = amigos.join("<br>")
  }
}

function sortearAmigo(){
  if(amigos[0] == null){
    alert("A lista está vazia")
  }else{
    document.getElementById("resultado").innerHTML = amigos[Math.floor(Math.random()*amigos.length)]
  }
}

//Por favor, insira um nome.