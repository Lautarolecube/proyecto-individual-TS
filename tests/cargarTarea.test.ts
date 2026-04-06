import { describe, it, expect } from "vitest";
import { TareaNormal } from "../src/Tarea";
import { ManagerTarea } from "../src/ManagerTarea";

describe("ManagerTarea — cargar tiempo", () => {
  it("actualiza el tiempo de una tarea existente", () => {
    const manager = new ManagerTarea();
    const tarea = new TareaNormal(1, "Descripción", false, "Estudio TS", 0);
    manager.agregarTarea(tarea, 0);
    manager.cargarTiempo(1, 5);
    expect(manager.obtenerTareaId(1).getTiempo()).toBe(5);
  });
});
