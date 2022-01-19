
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



var botaoEncriptar = document.querySelector("#btn-cripto");
var botaoCopiar = document.querySelector("#btn-copy");
document.querySelector("#btn-copy").addEventListener("click",copy);
botaoEncriptar.addEventListener("click",function(event){
  event.preventDefault();

  var textoTitulo = document.querySelector("#msg-titulo");
  textoTitulo.textContent = "Mensagem criptografada";
  
  var mensagemCripgrafada = document.querySelector("#msg");
  var result = inputTexto.value.toLowerCase();
 var mensagemMinuscula = codificador(result);
 msg.value = mensagemMinuscula.replace(/[^a-z ]/gi,'');
  limparCampoMensagem();
  
});


var botaoDescricptar = document.querySelector("#btn-descripto");
botaoDescricptar.addEventListener("click", function(event){
    event.preventDefault();
    var textoTitulo = document.querySelector("#msg-titulo");
    textoTitulo.textContent = "Mensagem Descriptografada";
    limparCampoMensagem();
    
});
var data = new Date();
var footdata = document.querySelector("#footer-data");
footdata.textContent = "@" + data.getFullYear()+" " +"- Desenvolvido por Weslley P. Alberto";

var botaoLimpar = document.querySelector("#btn-limpar");

botaoLimpar.addEventListener("click", function(){
  limparCampos();
  
  
});

    
