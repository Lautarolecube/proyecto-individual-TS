import { describe, it, expect } from "vitest";
import { UsuarioAdmin, UsuarioRegular } from "../src/Usuario";

describe("UsuarioAdmin", () => {
  it("debería crear un administrador con nivel de acceso por defecto", () => {
    const admin = new UsuarioAdmin("Admin", "admin123");

    expect(admin.getName()).toBe("Admin");
    expect(admin.getPassword()).toBe("admin123");
    expect(admin.tienePermisosAdmin()).toBe(true);
    expect(admin.getNivelAcceso()).toBe(1);
  });

  it("debería crear un administrador con nivel de acceso personalizado", () => {
    const admin = new UsuarioAdmin("SuperAdmin", "super123", 5);

    expect(admin.getNivelAcceso()).toBe(5);
    expect(admin.tienePermisosAdmin()).toBe(true);
  });

  it("debería poder cambiar su propio nombre", () => {
    const admin = new UsuarioAdmin("Admin", "admin123");
    admin.changeName("Administrator");

    expect(admin.getName()).toBe("Administrator");
  });

  it("debería poder cambiar su propia contraseña", () => {
    const admin = new UsuarioAdmin("Admin", "admin123");
    admin.changePassword("newAdminPass");

    expect(admin.getPassword()).toBe("newAdminPass");
  });

  it("debería poder gestionar usuarios (método específico de admin)", () => {
    const admin = new UsuarioAdmin("Admin", "admin123");

    // El método imprime en consola, verificamos que no lance error
    expect(() => admin.gestionarUsuarios()).not.toThrow();
  });

  it("debería poder actualizar nivel de acceso", () => {
    const admin = new UsuarioAdmin("Admin", "admin123", 1);
    admin.setNivelAcceso(10);

    expect(admin.getNivelAcceso()).toBe(10);
  });

  it("debería poder hacer login correctamente", () => {
    const admin = new UsuarioAdmin("Admin", "admin123");

    expect(admin.login("Admin", "admin123")).toBe(true);
    expect(admin.login("Admin", "wrongpass")).toBe(false);
    expect(admin.login("WrongUser", "admin123")).toBe(false);
  });

  it("debería poder hacer logout", () => {
    const admin = new UsuarioAdmin("Admin", "admin123");
    admin.logout();

    expect(admin.getName()).toBe("");
    expect(admin.getPassword()).toBe("");
  });
});

describe("UsuarioRegular vs UsuarioAdmin", () => {
  it("debería demostrar diferencia en permisos de administrador", () => {
    const usuarioRegular = new UsuarioRegular("User", "user123");
    const usuarioAdmin = new UsuarioAdmin("Admin", "admin123");

    expect(usuarioRegular.tienePermisosAdmin()).toBe(false);
    expect(usuarioAdmin.tienePermisosAdmin()).toBe(true);
  });

  it("debería mostrar que UsuarioAdmin tiene método gestionarUsuarios que UsuarioRegular no tiene", () => {
    const usuarioRegular = new UsuarioRegular("User", "user123");
    const usuarioAdmin = new UsuarioAdmin("Admin", "admin123");

    // UsuarioRegular no tiene el método gestionarUsuarios
    expect(typeof (usuarioRegular as any).gestionarUsuarios).toBe("undefined");

    // UsuarioAdmin sí tiene el método gestionarUsuarios
    expect(typeof usuarioAdmin.gestionarUsuarios).toBe("function");
  });
});