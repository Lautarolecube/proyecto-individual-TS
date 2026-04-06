//src/Usuario.ts

export abstract class User{

//Atributos
    protected name: string;
    protected password: string;

constructor (name: string, password: string){
    this.name = name;
    this.password = password;
}

//Getters

public getName(): string {
    return this.name;
}

public getPassword(): string {
    return this.password;
}

//Setters

protected setName(name: string){
    this.name = name;
}

protected setPassword(password: string){
    this.password = password;
}

//Métodos

public abstract newUser(name: string, password: string): User;

public login(name: string, password: string): boolean {
    if(this.name === name && this.password === password){
        return true;
    }
    return false;
}

public logout(): void {
    this.name = "";
    this.password = "";
}

public changePassword(newPassword: string): void {
    this.password = newPassword;
}

public changeName(newName: string): void {
    this.name = newName;
}

// Método abstracto para determinar permisos
public abstract tienePermisosAdmin(): boolean;
}

export class UsuarioRegular extends User {
    constructor(name: string, password: string) {
        super(name, password);
    }

    public tienePermisosAdmin(): boolean {
        return false;
    }

    public newUser(name: string, password: string): UsuarioRegular {
        return new UsuarioRegular(name, password);
    }
}

export class UsuarioAdmin extends User {
    private nivelAcceso: number;

    constructor(name: string, password: string, nivelAcceso: number = 1) {
        super(name, password);
        this.nivelAcceso = nivelAcceso;
    }

    public tienePermisosAdmin(): boolean {
        return true;
    }

    public getNivelAcceso(): number {
        return this.nivelAcceso;
    }

    public setNivelAcceso(nivelAcceso: number): void {
        this.nivelAcceso = nivelAcceso;
    }

    // Método adicional para administradores
    public gestionarUsuarios(): void {
        console.log("Gestionando usuarios del sistema...");
    }

    public newUser(name: string, password: string): UsuarioAdmin {
        return new UsuarioAdmin(name, password);
    }
}