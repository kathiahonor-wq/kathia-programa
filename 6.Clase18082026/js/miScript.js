alert("Si funciona");
function Multiplicar(a,b){
    let a= parseInt(prompt("Ingrese el primer numero a multiplicar:"));
    let b= parseInt(prompt("Ingrese el segundo numero a multiplicar:"));
let num1 =a;
let num2=b ;
if(num1<0){
  num1=-num1;
}
if(num2<0){
    num2=-num2;
}
let suma=0;
for(let i=0; i<num2; i++){
    suma= suma+num1;
}
if((a<0 && b>0|| (a>0 && b<0))){
    suma=-suma;
}return suma;
console.log("El resultado de la multiplicacin es:",suma);}
