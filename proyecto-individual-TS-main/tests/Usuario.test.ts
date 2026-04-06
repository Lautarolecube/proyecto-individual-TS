import { describe, it, expect } from "vitest";
import { User } from "../src/Usuario";


describe("User", () => {
  it("debería crear un usuario con los datos correctos", () => {
    const newuser = new User("Lautaro", "123456789");

    expect(newuser.getName()).toBe("Lautaro");
    expect(newuser.getPassword()).toBe("123456789");
  });
});

describe("User", () => {
  it("debería actualizar el nombre de un usuario con los datos correctos", () => {
    const newuser = new User("Lautaro", "123456789");
    newuser.changeName("Lautaro2");

    expect(newuser.getName()).toBe("Lautaro2");
  });
});

describe("User", () => {
  it("debería actualizar la contraseña de un usuario con los datos correctos", () => {
    const newuser = new User("Lautaro", "123456789");
    newuser.changePassword("2025!!");

    expect(newuser.getPassword()).toBe("2025!!");
  });
});

