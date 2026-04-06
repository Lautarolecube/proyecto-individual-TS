//src/ManagerTarea.ts

import { Tarea } from "./Tarea";
import { User } from "./Usuario";

export class ManagerTarea {
    private tareas: Tarea[];
    private board: number[];

    constructor() {
        this.tareas = [];
        this.board = [];
    }

public agregarTarea(tarea: Tarea, board: number): void {
        this.tareas.push(tarea);
        this.board.push(board);
    }

public eliminarTarea(id: number, titulo: string): void {
    const cantidad = this.tareas.length;

        this.tareas = this.tareas.filter(tarea => !(tarea.getId() === id && tarea.getTitulo() === titulo));

        if(this.tareas.length === cantidad){
            throw new Error(`Task with id ${id} not found`);
        }

    }

public listarTareas(): Tarea[] {
        return [...this.tareas];
    }

public obtenerTareaId(id: number): Tarea {
    const tarea = this.tareas.find(t => t.getId() === id);

    if (!tarea) {
        throw new Error(`Task with id ${id} not found`);
    }

    return tarea;
}

//Métodos

public tareaDuplicada(id: number, titulo: string): void {
        const tareaDuplicada = this.tareas.find(
            (t) => t.getId() === id && t.getTitulo() === titulo
        );

        if (tareaDuplicada) {
    throw new Error(`Tarea duplicada con id ${tareaDuplicada.getId()}`);
    }
}


public cargarTiempo(id: number, tiempo: number): void {
    const tarea = this.obtenerTareaId(id);
    tarea.setTiempo(tiempo);
}

/** Indica si existe una tarea con el id dado. */
public validarTareaPorId(id: number): boolean {
    return this.tareas.some((t) => t.getId() === id);
}

/**
 * Busca tareas cuyo título o descripción contengan el texto (sin distinguir mayúsculas).
 * Si el texto está vacío, devuelve una copia de todas las tareas.
 */
public buscarTareasPorTexto(texto: string): Tarea[] {
    const q = texto.trim().toLowerCase();
    if (q === "") {
        return [...this.tareas];
    }
    return this.tareas.filter(
        (t) =>
            t.getTitulo().toLowerCase().includes(q) ||
            t.getDescripcion().toLowerCase().includes(q)
    );
}

/** Asigna un usuario responsable a la tarea identificada por id. */
public asignarResponsable(idTarea: number, usuario: User): void {
    const tarea = this.obtenerTareaId(idTarea);
    tarea.setResponsable(usuario);
}

}