function codificador(palavra){
    var novapalavra = [];
    for(var i =0; i < palavra.length;i++){
       if(palavra[i] == "e"){
         novapalavra[i] = "enter";
       }
       else if (palavra[i] == "i"){
         novapalavra[i] = "imes";
       }
       else if(palavra[i] == "a"){
         novapalavra[i] = "ai";
       }
       else if(palavra[i] == "o"){
         novapalavra[i] = "ober";
       }
       else if(palavra[i] == "u"){
         novapalavra[i] = "ufat";
       }
       else{
         novapalavra[i] = palavra[i];
       }
      
    }
    return novapalavra.join("");
  }
  function validaCampos(inputText){

    var minusculo = inputText.toLowerCase(); 
    var textoConvertido = minusculo.replace(/[^a-z]/g, '');
    return textoConvertido;
};
function copy(){
  var textoCpiado = document.querySelector("#msg");
  textoCpiado.select();
  document.execCommand("copy");

}

