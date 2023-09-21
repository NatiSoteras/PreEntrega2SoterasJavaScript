class ItemPresup {
    nombre;
    precio;
    particip;
    cantidad;
    participtotal;
    subtotal;

    constructor(nombre,precio,particip) {
        this.nombre = nombre;
        this.precio = precio;
        this.particip = particip;
        this.cantidad = cantidad;
        this.participtotal = cantidad*particip
        this.subtotal = this.precio*this.participtotal;
    }
}