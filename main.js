let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#logado')
logado.innerHTML = `Olá ${userLogado.nome}`


function sair(){
    localStorage.removeItem('token')
    window.location.href = "login.html"
}

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'login.html'
  }
  