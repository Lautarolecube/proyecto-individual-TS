import { Tarea } from "./tarea";

class ManagerTarea {
    private tareas: Tarea[];

    constructor() {
        this.tareas = [];
    }

public agregarTarea(tarea: Tarea): void {
        this.tareas.push(tarea);
    }

public eliminarTarea(id: number, titulo: string): void {
        this.tareas = this.tareas.filter(tarea => !(tarea.getId() === id && tarea.getTitulo() === titulo));
    }

public listarTareas(): Tarea[] {
        return this.tareas;
    }


}