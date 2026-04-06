import { describe, it, expect } from "vitest";
import { ManagerTarea } from "../src/ManagerTarea";
import { TareaNormal } from "../src/Tarea";
import { UsuarioRegular } from "../src/Usuario";

describe("ManagerTarea", () => {
  it("validar tarea por Id devuelve true si el id existe", () => {
    const manager = new ManagerTarea();
    manager.agregarTarea(new TareaNormal(1, "Desc", false, "Título", 0), 0);
    expect(manager.validarTareaPorId(1)).toBe(true);
    expect(manager.validarTareaPorId(99)).toBe(false);
  });

  it("buscar Tareas Por Texto filtra por título o descripción", () => {
    const manager = new ManagerTarea();
    manager.agregarTarea(
      new TareaNormal(1, "Aprender TypeScript", false, "Curso TS", 0),
      0
    );
    manager.agregarTarea(new TareaNormal(2, "Otra cosa", false, "Java", 0), 0);

    const porTitulo = manager.buscarTareasPorTexto("java");
    expect(porTitulo).toHaveLength(1);
    expect(porTitulo[0].getId()).toBe(2);

    const porDesc = manager.buscarTareasPorTexto("typescript");
    expect(porDesc).toHaveLength(1);
    expect(porDesc[0].getId()).toBe(1);
  });

  it("asignar Responsable a la tarea", () => {
    const manager = new ManagerTarea();
    manager.agregarTarea(new TareaNormal(1, "Aprender TypeScript", false, "Curso TS", 0), 0);
    const usuario = new UsuarioRegular("Lautaro2", "secreto123");

    manager.asignarResponsable(1, usuario);

    const tarea = manager.obtenerTareaId(1);
    expect(tarea.getResponsable()).toBe(usuario);
    expect(tarea.getResponsable()?.getName()).toBe("Lautaro2");
  });

  it("asignar Responsable a la tarea lanza si el id no existe en la tarea", () => {
    const manager = new ManagerTarea();
    const usuario = new UsuarioRegular("Lautaro2", "secreto123");

    expect(() => manager.asignarResponsable(404, usuario)).toThrow(`Task with id 404 not found`);
  });
});

describe("ManagerTarea", () => {
  it("cargar Tiempo a la tarea", () => {
    const manager = new ManagerTarea();
    manager.agregarTarea(new TareaNormal(1, "Aprender TypeScript", false, "Curso TS", 0), 0);
    manager.cargarTiempo(1, 10);
    expect(manager.obtenerTareaId(1).getTiempo()).toBe(10);
  });
});
