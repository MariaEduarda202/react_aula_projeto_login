import React from 'react'

export default function Login(){
  function botao() {alert('*Usuário e/ou Senha estão inválidos.')
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;



   
    if (username=="" && password== ""){
      alert ("Usuário e/ou Senha estão inválidos. ")

    } else if (username && password){
          alert("Você será direcionado para nossa página ")
    }
    return(
        <div>
            <form className='formulario' action="" >
             <input type="text" id='nome' placeholder='Nome do Usuário' maxLength='20' minLength='2'/>
             <br />
             <input type='password' id='password' placeholder='Senha' minLength='3' maxLength='4'/>
             <br />
             <button onClick={() => botao()}>Entrar</button>  
             <p>Esqueceu a Senha? <a href='#'>Clique aqui</a></p> 
            </form>
            
        </div>
    )
}
}