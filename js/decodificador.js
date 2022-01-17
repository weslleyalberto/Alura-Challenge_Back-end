
 function decodificador(palavra){
    var ra = /ai/gi;
    var re = /enter/gi;
    var ri = /imes/gi;
    var ro = /ober/gi;
    var ru = /ufat/gi;
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
    var textoTitulo = document.querySelector("#msg-titulo");
    textoTitulo.textContent = "Mensagem Descriptografada";
    var msg = document.querySelector("#msg");
    msg.value = decodificador(inputTexto.value);
    
});