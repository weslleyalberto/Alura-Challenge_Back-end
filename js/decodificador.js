
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
    var textoTitulo = document.querySelector("#msg-titulo");
    textoTitulo.textContent = "Mensagem Descriptografada";
    
    msg.value = decodificador(inputTexto.value);
     
});