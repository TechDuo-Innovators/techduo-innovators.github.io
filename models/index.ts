export class Proyecto {
    nombre: string;
    descripcion: string;
    route: string;


    constructor(nombre: string, descripcion: string, route: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.route = route;
    }
}

export class Servicio {
    nombre: string;
    descripcion: string;
    icono: string;


    constructor(nombre: string, descripcion: string, icono: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.icono = icono;
    }
}

export class LandingInfo {

}