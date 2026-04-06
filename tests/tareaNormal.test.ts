import { describe, it, expect } from "vitest";
import { TareaNormal } from "../src/Tarea";
import { UsuarioRegular } from "../src/Usuario";

describe("TareaNormal", () => {
  it("crear una tarea normal con todos los parámetros", () => {
    const tarea = new TareaNormal(1, "Descripción de tarea", false, "Título de tarea", 5);

    expect(tarea.getId()).toBe(1);
    expect(tarea.getDescripcion()).toBe("Descripción de tarea");
    expect(tarea.getEstado()).toBe(false);
    expect(tarea.getTitulo()).toBe("Título de tarea");
    expect(tarea.getTiempo()).toBe(5);
    expect(tarea.getResponsable()).toBeNull();
  });

  it("calcular prioridad correctamente para tareas cortas", () => {
    const tareaCorta = new TareaNormal(1, "Tarea corta", false, "Corta", 4);
    const tareaMedia = new TareaNormal(2, "Tarea media", false, "Media", 8);
    const tareaLarga = new TareaNormal(3, "Tarea larga", false, "Larga", 12);

    expect(tareaCorta.calcularPrioridad()).toBe(1);
    expect(tareaMedia.calcularPrioridad()).toBe(1); // <= 8
    expect(tareaLarga.calcularPrioridad()).toBe(2); // > 8
  });

  it("asignar y cambiar responsable", () => {
    const tarea = new TareaNormal(1, "Tarea", false, "Título", 0);
    const usuario1 = new UsuarioRegular("Juan", "pass1");
    const usuario2 = new UsuarioRegular("María", "pass2");

    tarea.setResponsable(usuario1);
    expect(tarea.getResponsable()).toBe(usuario1);

    tarea.setResponsable(usuario2);
    expect(tarea.getResponsable()).toBe(usuario2);

    tarea.setResponsable(null);
    expect(tarea.getResponsable()).toBeNull();
  });

  it("modificar todos sus atributos", () => {
    const tarea = new TareaNormal(1, "Original", false, "Original", 0);

    tarea.setId(2);
    tarea.setDescripcion("Modificada");
    tarea.setEstado(true);
    tarea.setTitulo("Modificado");
    tarea.setTiempo(10);

    expect(tarea.getId()).toBe(2);
    expect(tarea.getDescripcion()).toBe("Modificada");
    expect(tarea.getEstado()).toBe(true);
    expect(tarea.getTitulo()).toBe("Modificado");
    expect(tarea.getTiempo()).toBe(10);
  });

  it("estados de tarea correctamente", () => {
    const tarea = new TareaNormal(1, "Tarea", false, "Título", 0);

    expect(tarea.tareaPendiente()).toBe(true);
    expect(tarea.tareaCompletada()).toBe(false);
    expect(tarea.tareaEnProgreso()).toBe(false);

    tarea.marcarTareaEnProgreso();
    expect(tarea.getEstado()).toBe(true);
    expect(tarea.tareaEnProgreso()).toBe(true);
    expect(tarea.tareaCompletada()).toBe(true); // Considera true como completada

    tarea.marcarTareaPendiente();
    expect(tarea.getEstado()).toBe(false);
    expect(tarea.tareaPendiente()).toBe(true);
  });

  it("crear tarea usando el método crearTarea", () => {
    const tarea = new TareaNormal(1, "", false, "", 0);
    tarea.crearTarea(10, "Nueva descripción", true, "Nuevo título");

    expect(tarea.getId()).toBe(10);
    expect(tarea.getDescripcion()).toBe("Nueva descripción");
    expect(tarea.getEstado()).toBe(true);
    expect(tarea.getTitulo()).toBe("Nuevo título");
  });

  it("modificar tarea usando el método modificarTarea", () => {
    const tarea = new TareaNormal(1, "Original", false, "Original", 0);
    tarea.modificarTarea(2, "Modificada", true, "Modificado", 8);

    expect(tarea.getId()).toBe(2);
    expect(tarea.getDescripcion()).toBe("Modificada");
    expect(tarea.getEstado()).toBe(true);
    expect(tarea.getTitulo()).toBe("Modificado");
    expect(tarea.getTiempo()).toBe(8);
  });
});