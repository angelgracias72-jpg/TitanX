const productos = [
{id:1,nombre:"Titan Whey",precio:899},
{id:2,nombre:"Creatina Monohidratada",precio:499},
{id:3,nombre:"Titan Rage",precio:599},
{id:4,nombre:"BCAA Recovery",precio:399},
{id:5,nombre:"Mass Titan",precio:1099},
{id:6,nombre:"Omega 3",precio:299},
{id:7,nombre:"Multivitamínico",precio:249},
{id:8,nombre:"Glutamina",precio:349}
];

function agregar(id){

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

let producto=productos.find(p=>p.id===id);

carrito.push(producto);

localStorage.setItem("carrito",JSON.stringify(carrito));

alert(producto.nombre+" agregado al carrito");

}

function cargarCarrito(){

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

let contenedor=document.getElementById("carrito");

if(!contenedor) return;

let total=0;

contenedor.innerHTML="";

carrito.forEach((p,index)=>{

total+=p.precio;

contenedor.innerHTML+=`
<div class="cart-item">
<div>
<h3>${p.nombre}</h3>
<p>$${p.precio}</p>
</div>

<button onclick="eliminar(${index})">
Eliminar
</button>
</div>
`;

});

document.getElementById("total").innerText=total;

}

function eliminar(index){

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

carrito.splice(index,1);

localStorage.setItem("carrito",JSON.stringify(carrito));

cargarCarrito();

}

function vaciar(){

localStorage.removeItem("carrito");

cargarCarrito();

}

function finalizar(){

window.location.href="checkout.html";

}

function comprar(){

localStorage.removeItem("carrito");

window.location.href="index.html";

}
