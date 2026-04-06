//src/Tarea.ts

import { User } from "./Usuario";

export abstract class Tarea {

//Atributos

    protected id: number;
    protected descripcion: string;
    protected estado: boolean;
    protected titulo: string;
    protected tiempo: number;
    protected responsable: User | null;

    constructor(id: number,descripcion: string,estado: boolean,titulo: string,tiempo: number,responsable: User | null = null) {
        this.id = id;
        this.descripcion = descripcion;
        this.estado = estado;
        this.titulo = titulo;
        this.tiempo = tiempo;
        this.responsable = responsable;
    }

//Getters para acceder a los atributos de la tarea

public getTarea(): Tarea {
        return this;
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

public getResponsable(): User | null {
        return this.responsable;
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

public setResponsable(usuario: User | null): void {
    this.responsable = usuario;
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

// Método abstracto que las subclases deben implementar
public abstract calcularPrioridad(): number;

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
    this.estado = false;
}
}

export class TareaNormal extends Tarea {
    constructor(id: number, descripcion: string, estado: boolean, titulo: string, tiempo: number, responsable: User | null = null) {
        super(id, descripcion, estado, titulo, tiempo, responsable);
    }

    public calcularPrioridad(): number {
        // Prioridad normal basada en tiempo estimado
        return this.tiempo > 8 ? 2 : 1;
    }
}

export class TareaUrgente extends Tarea {
    private prioridadExtra: number;

    constructor(id: number, descripcion: string, estado: boolean, titulo: string, tiempo: number, responsable: User | null = null, prioridadExtra: number = 5) {
        super(id, descripcion, estado, titulo, tiempo, responsable);
        this.prioridadExtra = prioridadExtra;
    }

    public calcularPrioridad(): number {
        // Prioridad alta más el extra por urgencia
        return 10 + this.prioridadExtra;
    }

    public getPrioridadExtra(): number {
        return this.prioridadExtra;
    }

    public setPrioridadExtra(prioridadExtra: number): void {
        this.prioridadExtra = prioridadExtra;
    }
}