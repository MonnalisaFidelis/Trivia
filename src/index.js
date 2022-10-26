import "./styles.css";

document.getElementById("app").innerHTML = `
<h1></h1>
<div>



  
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer"></a>
</div>
`;

const mostrealert1 = () => {
  alert("Amanda Costa");
};

const mostrealert2 = () => {
  alert("Jaqueline Goes de Jesus");
};

const mostrealert3 = () => {
  alert("Maria Fernanda Souza");
};

const mostrealert4 = () => {
  alert("Regina Marques");
};

const mostrealert5 = () => {
  alert("Maria Madalena Lima");
};

const mostrealert6 = () => {
  alert("Tarcila do Amaral");
};

document.getElementById("11").addEventListener("click", mostrealert1);
document.getElementById("12").addEventListener("click", mostrealert2);
document.getElementById("13").addEventListener("click", mostrealert3);
document.getElementById("22").addEventListener("click", mostrealert4);
document.getElementById("23").addEventListener("click", mostrealert5);
document.getElementById("24").addEventListener("click", mostrealert6);
