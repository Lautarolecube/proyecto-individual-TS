

export class Tarea {
    completada(completada: any) {
        throw new Error("Method not implemented.");
    } 
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

public getId(): number {
        return this.id;
    }

public getDescripcion(): string {
        return this.descripcion;
    }

public getEstado(): boolean {
        return this.estado;
    }

public getTitulo(): string {
        return this.titulo;
    }
public getTiempo(): number {
        return this.tiempo;
}

//Setters para modificar los atributos de la tarea

public setId(id: number): void {
        this.id = id;
    }

public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

public setEstado(estado: boolean): void {
    this.estado = estado;
    }   

public setTitulo(titulo: string): void {
    this.titulo = titulo;
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