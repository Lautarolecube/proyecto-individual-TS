import { describe, it, expect } from "vitest";
import { ManagerTarea } from "../src/ManagerTarea";
import { Tarea } from "../src/Tarea";

describe("ManagerTarea", () => {
  it("debería crear una tarea con los datos correctos", () => {
    const newtask = new Tarea(1, "Estudiar 3 horas por día TypeScript", false, "Estudio TS", 0);

    expect(newtask).toBeDefined();
  });
});


describe("Modificar horas", () => {
    it("cargar horas de una tarea", () => {
        const newtask = new Tarea(1, "Estudiar 3 horas por día TypeScript", true, "Estudio TS", 6);
    
        expect(newtask.getId).toBe(1);
        expect(newtask.getTitulo).toBe("Estudiar 3 horas por día TypeScript");
        expect(newtask.completada).toBe(true);
        expect(newtask.getDescripcion).toBe("Estudio TS");
        expect(newtask.getTiempo).toBe(6);
    });
});


