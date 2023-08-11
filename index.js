const submit = document.getElementById("submit");


submit.addEventListener("click", validate);
const nome= document.getElementById("nome").value; 
const email= document.getElementById("e-mail").value;

function validate() {
   if ( nome == "") {
    alert("Por favor preencha tod   os campos!")
   } else {
    alert( "Cadastro realizado. Obrigado!");
   };

   if ( email == "") {
    alert("Por favor preencha todos campos!")
   } else {
    alert( "Cadastro realizado. Obrigado!");
   };
    

 
}
