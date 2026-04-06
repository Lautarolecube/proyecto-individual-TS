import { describe, it, expect } from "vitest";
import { TareaUrgente, TareaNormal } from "../src/Tarea";
import { UsuarioRegular } from "../src/Usuario";

describe("TareaUrgente", () => {
  it("tarea urgente con prioridad extra por defecto", () => {
    const tarea = new TareaUrgente(1, "Tarea crítica", false, "Urgente", 2);

    expect(tarea.getId()).toBe(1);
    expect(tarea.getPrioridadExtra()).toBe(5);
    expect(tarea.calcularPrioridad()).toBe(15); // 10 + 5
  });

  it(" tarea urgente con prioridad extra personalizada", () => {
    const tarea = new TareaUrgente(2, "Tarea muy crítica", false, "Muy Urgente", 4, null, 8);

    expect(tarea.getPrioridadExtra()).toBe(8);
    expect(tarea.calcularPrioridad()).toBe(18); // 10 + 8
  });

  it("permitir asignar responsable a tarea urgente", () => {
    const usuario = new UsuarioRegular("Juan", "pass123");
    const tarea = new TareaUrgente(1, "Tarea crítica", false, "Urgente", 2);

    tarea.setResponsable(usuario);
    expect(tarea.getResponsable()).toBe(usuario);
    expect(tarea.getResponsable()?.getName()).toBe("Juan");
  });

  it("marcar como completada una tarea urgente", () => {
    const tarea = new TareaUrgente(1, "Tarea crítica", false, "Urgente", 2);
    tarea.marcarTareaCompletada();

    expect(tarea.getEstado()).toBe(true);
    expect(tarea.tareaCompletada()).toBe(true);
    expect(tarea.tareaPendiente()).toBe(false);
  });

  it("calcular prioridad más alta que tareas normales", () => {
    const tareaNormal = new TareaNormal(1, "Tarea normal", false, "Normal", 10);
    const tareaUrgente = new TareaUrgente(2, "Tarea urgente", false, "Urgente", 2);

    expect(tareaUrgente.calcularPrioridad()).toBeGreaterThan(tareaNormal.calcularPrioridad());
  });
});

describe("TareaNormal vs TareaUrgente", () => {
  it("debería demostrar polimorfismo con calcularPrioridad", () => {
    const tareas = [
      new TareaNormal(1, "Tarea 1", false, "Normal 1", 4),
      new TareaUrgente(2, "Tarea 2", false, "Urgente 1", 2),
      new TareaNormal(3, "Tarea 3", false, "Normal 2", 12),
      new TareaUrgente(4, "Tarea 4", false, "Urgente 2", 1, null, 10)
    ];

    const prioridades = tareas.map(t => t.calcularPrioridad());

    expect(prioridades[0]).toBe(1); // TareaNormal corta
    expect(prioridades[1]).toBe(15); // TareaUrgente default
    expect(prioridades[2]).toBe(2); // TareaNormal larga
    expect(prioridades[3]).toBe(20); // TareaUrgente con prioridad extra 10
  });
});