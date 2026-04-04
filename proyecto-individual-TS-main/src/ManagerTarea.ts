//src/ManagerTarea.ts

import {Tarea} from "./Tarea";
import {Board} from "./Board";

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
            throw new Error('Task with id ${id} not found');
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

public tareaDuplicada(id: number, titulo: string): void {
        const tareaDuplicada = this.tareas.find(t => t.getId() === this.tareas.getId());

        if (tareaDuplicada) {
    throw new Error(`Tarea duplicada con id ${tareaDuplicada.getId()}`);
}
} 


}