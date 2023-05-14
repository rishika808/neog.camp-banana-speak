var btnTranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return serverURL + "?"+ "text="+ text
}
function errorHandler(error){
    console.log("error occured".error)
    alert("something wrong with server:try again after sommetime")
}

function clickEventHandler() {
   // outputDiv.innerText="sgdfgfjhsdxg"+ txtinput.value;
   var inputText=txtinput.value;

   fetch(getTranslationURL(text))
   .then(response=>respnse.json())
   .then(json=>{
     var translatedText=json.contents.translated;
     outputDiv.innerText=translatedText;
   })
};
btnTranslate.addEventListener("click",clickHandler)
