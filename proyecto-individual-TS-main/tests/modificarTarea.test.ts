import { describe, it, expect } from "vitest";
import { ManagerTarea } from "../src/ManagerTarea";
import { Tarea } from "../src/Tarea";

describe("Tarea", () => {
  it("debería crear una tarea con los datos correctos", () => {
    const newtask = new Tarea(1, "Estudiar 3 horas por día TypeScript", false, "Estudio TS", 0);

        expect(newtask.getId()).toBe(1);
        expect(newtask.getDescripcion()).toBe("Estudiar 3 horas por día TypeScript");
        expect(newtask.getEstado()).toBe(false);
        expect(newtask.getTitulo()).toBe("Estudio TS");
        expect(newtask.getTiempo()).toBe(0);
  });
});


describe("Tarea", () => {
    it("cargar horas de una tarea completada", () => {
        const newtask = new Tarea(1, "Estudiar 3 horas por día TypeScript", false, "Estudio TS", 6);
        newtask.marcarTareaCompletada();
    
        expect(newtask.getId()).toBe(1);
        expect(newtask.getDescripcion()).toBe("Estudiar 3 horas por día TypeScript");
        expect(newtask.getEstado()).toBe(true);
        expect(newtask.getTitulo()).toBe("Estudio TS");
        expect(newtask.getTiempo()).toBe(6);
    });
});




