class Tarea { 
    private id: number;
    private descripcion: string;
    private estado: boolean;
    private titulo: string;
    private tiempo: number;

    constructor(id: number, descripcion: string, estado: boolean, titulo: string, tiempo: number) {
        this.id = id;
        this.descripcion = descripcion;
        this.estado = estado;
        this.titulo = titulo;
        this.tiempo = tiempo;
    }

//Getters para acceder a los atributos de la tarea

get Id(): number {
        return this.id;
    }

get Descripcion(): string {
        return this.descripcion;
    }

get Estado(): boolean {
        return this.estado;
    }

get Titulo(): string {
        return this.titulo;
    }

get Tiempo(): number {
        return this.tiempo;
    }

//Setters para modificar los atributos de la tarea

setId(id: number): void {
        this.id = id;
    }

setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

setEstado(estado: boolean): void {
    this.estado = estado;
    }   

setTitulo(titulo: string): void {
    this.titulo = titulo;
    }

setTiempo(tiempo: number): void {
    this.tiempo = tiempo;
}

//Métodos

public crearTarea(id: number, descripcion: string, estado: boolean, titulo: string): void {
    this.id = id;
    this.descripcion = descripcion;
    this.estado = estado;
    this.titulo = titulo;
}

public modificarTarea(id: number, descripcion: string, estado: boolean, titulo: string, tiempo: number): void {
    this.id = id;
    this.descripcion = descripcion;
    this.estado = estado;
    this.titulo = titulo;
    this.tiempo = tiempo;
}

public marcarTareaCompletada(): void {
    this.estado = true;
}





}