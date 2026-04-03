import { describe, it, expect } from "vitest";
import {Tarea} from "../src/Tarea";

describe("Tarea", () => {
  it("debería crear una tarea con los datos correctos", () => {
    const newtask = new Tarea(1, "Estudiar 3 horas al día TypeScript", false, "Estudio POO con TS", 0);

    expect(newtask).toBeDefined();
  });
});


