import { describe, it, expect } from "vitest";
import { Board } from "../src/Board";
import { User } from "../src/Usuario";

describe("Board", () => {
  it("debería crear un board con los datos correctos", () => {
    const newboard = new Board("Proyecto Typescript");

    expect(newboard.getProyecto()).toBe("Proyecto Typescript");
  });
});

describe("Board", () => {
  it("Quiero actualizar el nombre de un board con el nombre correcto", () => {
    const newboard = new Board("Proyecto Typescript");
    newboard.setProyecto("Proyecto Typescript 2");

    expect(newboard.getProyecto()).toBe("Proyecto Typescript 2");
  });
});

describe("Board", () => {
  it("debería eliminar un board con los datos correctos", () => {
    const newboard = new Board("Proyecto Typescript");
    newboard.eliminarBoard();

    expect(newboard.getProyecto()).toBe("");
  });
});

describe("Board", () => {
  it("quiero agregar un usuario al board", () => {
    const board = new Board("Proyecto Typescript");
    const usuario = new User("Lautaro", "123456789");

    board.agregarUsuario(usuario);

    expect(board.listarUsuarios()).toHaveLength(1);
    expect(board.listarUsuarios()[0].getName()).toBe("Lautaro");
  });
});