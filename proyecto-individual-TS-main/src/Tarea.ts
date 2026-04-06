//src/Tarea.ts

export class Tarea {

//Atributos

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

public getTarea(): Tarea {
        return this.getTarea();
}


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

public setTiempo(tiempo: number): void {
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

public tareaPendiente(): boolean {
    return this.estado === false;
}

public tareaEnProgreso(): boolean {
    return this.estado === true;
}

public tareaCompletada(): boolean {
    return this.estado === true;
}

public marcarTareaCompletada(): void {
    this.estado = true;
}


public marcarTareaEnProgreso(): void {
    this.estado = true;
}

public marcarTareaPendiente(): void {
    this.estado === false;
}

}