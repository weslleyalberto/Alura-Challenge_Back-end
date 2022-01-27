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
  /*function validaCampos(inputText){

    var minusculo = inputText.toLowerCase(); 
    var textoConvertido = minusculo.replace(/[^a-z]/g, '');
    return textoConvertido;
};*/
function copy(){
  var textoCpiado = document.querySelector("#msg");
  textoCpiado.select();
  navigator.clipboard.writeText(textoCpiado.value);
 
  alert("Texto Copiado!");

}function limparCampos(){
  msg.value = "";
  inputTexto.value = "";
}
function limparCampoMensagem(){
  inputTexto.value = "";
}


