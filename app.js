
///EMITIR el presupuesto de una cantidad de coreografias elegidas

const productos = [
    { nombre: "Solista", precio: 2000, particip: 1 },
    { nombre: "Dúo", precio: 1800, particip: 2 },
    { nombre: "Trío", precio: 1500, particip: 3 },
    { nombre: "Grupal", precio: 1000, particip: 1 }
];
const detallePresupuesto = []; 
const tipo = []; 
let opcion;
let continuar;
let total 
let cantidad;
let i =1;



function menu() {
    alert ('Bienvenidos al presupuestador de SOMOS DANZA 2023');
    do {
        const listaStringProductos = productos.map((product,index) =>
            `${index + 1} - ${product.nombre} Precio por participante: $${product.precio}`);
        opcion = parseInt(prompt('Que tipo de coreografia desea agregar al presupuesto?' + '\n' + listaStringProductos.join('\n')));

        while (opcion <= 0 || opcion > productos.length || isNaN(opcion) || opcion == undefined) {
        opcion = parseInt(prompt('La opcion ingresada no es correcta, ¿Que tipo de coreografia desea agregar al presupuesto?' + '\n' + listaStringProductos.join('\n')));
        }
        if (opcion != 4) {
         cantidad = 1;
        }
        else {
            cantidad = parseInt(prompt('Ingrese la cantidad de participantes del grupal'));
            
            while (cantidad < 4 || isNaN(cantidad) || cantidad == undefined) {
                cantidad = parseInt(prompt('Recuerde que esta categoría aplica solo para mas de 3 participantes, por favor ingrese la cantidad de participantes del grupal'));
                } 
        }
       
        detallePresupuesto.push(new ItemPresup(productos[opcion-1].nombre,productos[opcion-1].precio,productos[opcion-1].particip,productos[opcion-1].cantidad,productos[opcion-1].subtotal));

        continuar = prompt('¿Desea agregar alguna coreografía mas? si/no').toLowerCase();

    }while(continuar != 'no');
}

menu();


const listaStringCoreog = detallePresupuesto.map((coreo) =>
            `${coreo.nombre} , cant. de participantes: ${coreo.participtotal}, subtotal: $${coreo.subtotal}`);

alert('Usted ha agregado las siguientes coreografías:'+ '\n' + 
        listaStringCoreog.join('\n')+ '\n' +
        `Su presupuesto TOTAL para ${detallePresupuesto.length} coreografías es de: $${total}`);
    

