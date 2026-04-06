import { describe, it, expect } from "vitest";
import { ManagerTarea } from "../src/ManagerTarea";
import { TareaNormal } from "../src/Tarea";

describe("TareaNormal", () => {
  it("debería crear una tarea normal con los datos correctos", () => {
    const newtask = new TareaNormal(1, "Estudiar 3 horas por día TypeScript", false, "Estudio TS", 0);

        expect(newtask.getId()).toBe(1);
        expect(newtask.getDescripcion()).toBe("Estudiar 3 horas por día TypeScript");
        expect(newtask.getEstado()).toBe(false);
        expect(newtask.getTitulo()).toBe("Estudio TS");
        expect(newtask.getTiempo()).toBe(0);
  });
});


describe("TareaNormal", () => {
    it("cargar horas de una tarea completada", () => {
        const newtask = new TareaNormal(1, "Estudiar 3 horas por día TypeScript", false, "Estudio TS", 6);
        newtask.marcarTareaCompletada();

        expect(newtask.getId()).toBe(1);
        expect(newtask.getDescripcion()).toBe("Estudiar 3 horas por día TypeScript");
        expect(newtask.getEstado()).toBe(true);
        expect(newtask.getTitulo()).toBe("Estudio TS");
        expect(newtask.getTiempo()).toBe(6);
    });
});




