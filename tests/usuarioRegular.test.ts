import { describe, it, expect } from "vitest";
import { UsuarioRegular } from "../src/Usuario";

describe("UsuarioRegular", () => {
  it("debería crear un usuario regular con los datos correctos", () => {
    const usuario = new UsuarioRegular("Juan Pérez", "miClave123");

    expect(usuario.getName()).toBe("Juan Pérez");
    expect(usuario.getPassword()).toBe("miClave123");
    expect(usuario.tienePermisosAdmin()).toBe(false);
  });

  it("debería poder cambiar su nombre", () => {
    const usuario = new UsuarioRegular("Juan", "pass123");
    usuario.changeName("Juan Carlos");

    expect(usuario.getName()).toBe("Juan Carlos");
  });

  it("debería poder cambiar su contraseña", () => {
    const usuario = new UsuarioRegular("Juan", "pass123");
    usuario.changePassword("nuevaClave456");

    expect(usuario.getPassword()).toBe("nuevaClave456");
  });

  it("debería poder hacer login con credenciales correctas", () => {
    const usuario = new UsuarioRegular("Juan", "pass123");

    expect(usuario.login("Juan", "pass123")).toBe(true);
  });

  it("debería rechazar login con credenciales incorrectas", () => {
    const usuario = new UsuarioRegular("Juan", "pass123");

    expect(usuario.login("Juan", "wrongpass")).toBe(false);
    expect(usuario.login("Pedro", "pass123")).toBe(false);
    expect(usuario.login("Pedro", "wrongpass")).toBe(false);
  });

  it("debería poder hacer logout", () => {
    const usuario = new UsuarioRegular("Juan", "pass123");
    usuario.logout();

    expect(usuario.getName()).toBe("");
    expect(usuario.getPassword()).toBe("");
  });

  it("debería poder crear un nuevo usuario usando newUser", () => {
    const usuario = new UsuarioRegular("Test", "test123");
    const nuevoUsuario = usuario.newUser("Nuevo", "nuevo123");

    expect(nuevoUsuario).toBeInstanceOf(UsuarioRegular);
    expect(nuevoUsuario.getName()).toBe("Nuevo");
    expect(nuevoUsuario.getPassword()).toBe("nuevo123");
  });

  it("debería mantener la sesión después de login exitoso", () => {
    const usuario = new UsuarioRegular("Juan", "pass123");

    // Login exitoso
    expect(usuario.login("Juan", "pass123")).toBe(true);

    // Los datos deberían mantenerse
    expect(usuario.getName()).toBe("Juan");
    expect(usuario.getPassword()).toBe("pass123");
  });

  it("debería permitir login después de cambiar contraseña", () => {
    const usuario = new UsuarioRegular("Juan", "pass123");

    // Cambiar contraseña
    usuario.changePassword("nuevaPass456");

    // Login con nueva contraseña debería funcionar
    expect(usuario.login("Juan", "nuevaPass456")).toBe(true);

    // Login con contraseña antigua debería fallar
    expect(usuario.login("Juan", "pass123")).toBe(false);
  });

  it("debería permitir login después de cambiar nombre", () => {
    const usuario = new UsuarioRegular("Juan", "pass123");

    // Cambiar nombre
    usuario.changeName("Juan Carlos");

    // Login con nuevo nombre debería funcionar
    expect(usuario.login("Juan Carlos", "pass123")).toBe(true);

    // Login con nombre antiguo debería fallar
    expect(usuario.login("Juan", "pass123")).toBe(false);
  });
});