import { describe, it, expect } from "vitest";
import { TareaNormal, TareaUrgente } from "../src/Tarea";

describe("TareaNormal", () => {
  it("debería crear una tarea normal con los datos correctos", () => {
    const newtask = new TareaNormal(1, "Estudiar 3 horas al día TypeScript", false, "Estudio POO con TS", 4);

    expect(newtask).toBeDefined();
    expect(newtask.getId()).toBe(1);
    expect(newtask.getTitulo()).toBe("Estudio POO con TS");
    expect(newtask.getTiempo()).toBe(4);
  });
});

describe("TareaNormal", () => {
  it("debería calcular prioridad correctamente para tarea normal", () => {
    const tareaCorta = new TareaNormal(1, "Tarea corta", false, "Título", 4);
    const tareaLarga = new TareaNormal(2, "Tarea larga", false, "Título", 10);

    expect(tareaCorta.calcularPrioridad()).toBe(1); // tiempo <= 8
    expect(tareaLarga.calcularPrioridad()).toBe(2); // tiempo > 8
  });
});

describe("TareaUrgente", () => {
  it("debería crear una tarea urgente con los datos correctos", () => {
    const tareaUrgente = new TareaUrgente(2, "Realizar los tests utilizando TypeScript", false, "Estudio POO con TS", 2);

    expect(tareaUrgente).toBeDefined();
    expect(tareaUrgente.getId()).toBe(2);
    expect(tareaUrgente.getPrioridadExtra()).toBe(5); // valor por defecto
  });
});

describe("TareaUrgente", () => {
  it("debería calcular prioridad alta para tarea urgente", () => {
    const tareaUrgente = new TareaUrgente(1, "Tarea urgente", false, "Título", 2, null, 3);

    expect(tareaUrgente.calcularPrioridad()).toBe(13); // 10 + 3
  });
});

describe("TareaUrgente", () => {
  it("debería permitir modificar prioridad extra", () => {
    const tareaUrgente = new TareaUrgente(1, "Tarea urgente", false, "Título", 2);
    tareaUrgente.setPrioridadExtra(10);

    expect(tareaUrgente.getPrioridadExtra()).toBe(10);
    expect(tareaUrgente.calcularPrioridad()).toBe(20); // 10 + 10
  });
});



