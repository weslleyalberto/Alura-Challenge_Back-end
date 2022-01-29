
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
var msg = document.querySelector("#msg");
var inputTexto = document.querySelector("#input-texto");

function codificador(texto){
    var novoNome = [] ;
    for(var i =0; i < texto.length;i++){
      switch(texto[i]){
         case 'a':
             novoNome[i] = "ai";
             break;
             case 'u':
                 novoNome[i] = "ufat";
                 break;
                 case 'o':
                     novoNome[i] = "ober";
                     break;
                     case 'e':
                         novoNome[i]  = "enter";
                         break;
                         case 'i':
                             novoNome[i] = "imes";
                             break;
                             default:
                                 novoNome[i] = texto[i];
  
      }
  }
    return novoNome.join("");
}
function decodificador(palavra){
  const ra = /ai/gi;
  const re = /enter/gi;
  const ri = /imes/gi;
  const ro = /ober/gi;
  const ru = /ufat/gi;
  var primeira = palavra.replace(ra,'a');
  var segunda = primeira.replace(re,'e');
  var terceira = segunda.replace(ri,'i');
  var quarta = terceira.replace(ro,'o');
  var quinta = quarta.replace(ru,'u');
  return quinta;
 
}
var botaoDescricptar = document.querySelector("#btn-descripto");
botaoDescricptar.addEventListener("click", function(event){
  event.preventDefault();
  const textoTitulo = document.querySelector("#msg-titulo");
  textoTitulo.textContent = "Mensagem Descriptografada";
  
  msg.value = decodificador(inputTexto.value);
   
});
function copy(){
  var textoCpiado = document.querySelector("#msg");
  textoCpiado.select();
  
  navigator.clipboard.writeText(textoCpiado.value); 
}
function limparCampos(){
  msg.value = "";
  inputTexto.value = "";
}
function limparCampoMensagem(){
  inputTexto.value = "";
}
var botaoEncriptar = document.querySelector("#btn-cripto");
var botaoCopiar = document.querySelector("#btn-copy");
document.querySelector("#btn-copy").addEventListener("click",copy);
botaoEncriptar.addEventListener("click",function(event){
  event.preventDefault();

  var textoTitulo = document.querySelector("#msg-titulo");
  ;    
  var result = inputTexto.value;
  var error = document.querySelector("span");
  if(result.length == 0){
    
    error.className = "error";
    setTimeout(function() {
      error.className = "error-invisivel";
     }, 3000);  
  }
  else if(result.match(/[^a-z ]/g)){
    error.textContent = "Não são permitidos caracteres especiais, números ou letras maíusculas!";
    error.className = "error";
    setTimeout(function(){
      error.className = "error-invisivel";
    },3000);
    
    return;
  }
  else{
    textoTitulo.textContent = "Mensagem criptografada"
    error.className = "error-invisivel";
    var mensagemMinuscula = codificador(result);
    msg.value = mensagemMinuscula.replace(/[^a-z ]/gi,'');
  limparCampoMensagem();  
  }
 
});
var botaoDescricptar = document.querySelector("#btn-descripto");
botaoDescricptar.addEventListener("click", function(event){
    event.preventDefault();
    const textoTitulo = document.querySelector("#msg-titulo");
    textoTitulo.textContent = "Mensagem Descriptografada";
    limparCampoMensagem();   
});
var botaoLimpar = document.querySelector("#btn-limpar");
botaoLimpar.addEventListener("click", function(){
  limparCampos();   
});
function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  setTimeout(function() {
   popup.classList.toggle("hiden");
  }, 2000); // 3000 = 3 segundos
}

