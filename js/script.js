
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/


  var inputTexto = document.querySelector("#input-texto");


 
 




var botaoEncriptar = document.querySelector("#btn-cripto");
botaoEncriptar.addEventListener("click",function(event){
  event.preventDefault();
  
  var mensagemCripgrafada = document.querySelector("#msg");
  var result = validaCampos(inputTexto.value);
  mensagemCripgrafada.value = codificador(result);
  
});

function limparCampos(){
  inputTexto.innerHTML = "";
}



    
