
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

  var teste = document.querySelector("#input-texto");
  var inputTexto = document.querySelector("#input-texto");


 
 

var t = decodificador("pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!");
console.log(t);
 var retornos = codificador("gato");
console.log(retornos);

var botaoEncriptar = document.querySelector("#btn-cripto");
botaoEncriptar.addEventListener("click",function(event){
  event.preventDefault();
  
  
});


console.log(validaCampos("564654aasdBBáCCCdd!#$%¨&*()_)"));
    
