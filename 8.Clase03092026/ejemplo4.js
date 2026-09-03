const productos={
    "laptop":800,
    "mouse":20,
    "Teclado":40,
    "Monitor":200,
}
let nombrebuscado=prompt("Ingrese el nombre del producto que desea comprar:");
let cantidad=parseInt(prompt("Ingrese la cantidad que desea comprar:"));
if(productos[nombrebuscado]) {
    let total=productos[nombrebuscado]*cantidad;
    alert("el totala pagar es:" +total);
}
else {
    alert("No existe el producto");
}