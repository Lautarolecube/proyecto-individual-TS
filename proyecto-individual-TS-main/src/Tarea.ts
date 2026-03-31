class Tarea { 
    private id: number;
    private descripcion: string;
    private estado: boolean;
    private titulo: string;

    constructor(id: number, descripcion: string, estado: boolean, titulo: string) {
        this.id = id;
        this.descripcion = descripcion;
        this.estado = estado;
        this.titulo = titulo;
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

//Métodos

public crearTarea(id: number, descripcion: string, estado: boolean, titulo: string): void {
    this.id = id;
    this.descripcion = descripcion;
    this.estado = estado;
    this.titulo = titulo;
}

public modificarTarea(id: number, descripcion: string, estado: boolean, titulo: string): void {
    this.id = id;
    this.descripcion = descripcion;
    this.estado = estado;
    this.titulo = titulo;
}

public marcarTareaCompletada(): void {
    this.estado = true;
}

}