import { describe, it, expect } from "vitest";
import { UsuarioRegular, UsuarioAdmin } from "../src/Usuario";


describe("UsuarioRegular", () => {
  it("debería crear un usuario regular con los datos correctos", () => {
    const newuser = new UsuarioRegular("Lautaro", "123456789");

    expect(newuser.getName()).toBe("Lautaro");
    expect(newuser.getPassword()).toBe("123456789");
    expect(newuser.tienePermisosAdmin()).toBe(false);
  });
});

describe("UsuarioRegular", () => {
  it("debería actualizar el nombre de un usuario regular con los datos correctos", () => {
    const newuser = new UsuarioRegular("Lautaro", "123456789");
    newuser.changeName("Lautaro2");

    expect(newuser.getName()).toBe("Lautaro2");
  });
});

describe("UsuarioRegular", () => {
  it("debería actualizar la contraseña de un usuario regular con los datos correctos", () => {
    const newuser = new UsuarioRegular("Lautaro", "123456789");
    newuser.changePassword("2025!!");

    expect(newuser.getPassword()).toBe("2025!!");
  });
});

describe("UsuarioAdmin", () => {
  it("debería crear un usuario admin con los datos correctos", () => {
    const admin = new UsuarioAdmin("Admin", "admin123", 2);

    expect(admin.getName()).toBe("Admin");
    expect(admin.getPassword()).toBe("admin123");
    expect(admin.tienePermisosAdmin()).toBe(true);
    expect(admin.getNivelAcceso()).toBe(2);
  });
});

describe("UsuarioAdmin", () => {
  it("debería tener permisos de administrador", () => {
    const admin = new UsuarioAdmin("Admin", "admin123");

    expect(admin.tienePermisosAdmin()).toBe(true);
  });
});

describe("UsuarioAdmin", () => {
  it("debería poder gestionar usuarios", () => {
    const admin = new UsuarioAdmin("Admin", "admin123");
    // El método gestionarUsuarios() imprime en consola, solo verificamos que no lance error
    expect(() => admin.gestionarUsuarios()).not.toThrow();
  });
});

describe("UsuarioAdmin", () => {
  it("debería actualizar el nivel de acceso", () => {
    const admin = new UsuarioAdmin("Admin", "admin123", 1);
    admin.setNivelAcceso(3);

    expect(admin.getNivelAcceso()).toBe(3);
  });
});

