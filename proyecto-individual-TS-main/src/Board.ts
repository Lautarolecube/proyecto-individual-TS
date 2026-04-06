//src/Board.ts

import { User } from "./Usuario";

export class Board{
    
    private proyecto: string;
    private usuarios: User[];

//Constructor

    constructor(proyecto: string){
        this.proyecto = proyecto;
        this.usuarios = [];
    }

//Setter

public setProyecto(proyecto: string){
    this.proyecto = proyecto;
}

//Getter

public getProyecto(){
    return this.proyecto;
}

//Métodos

public agregarUsuario(usuario: User): void {
    this.usuarios.push(usuario);
}

public listarUsuarios(): User[] {
    return [...this.usuarios];
}

public eliminarBoard(): void {
    this.proyecto = "";
    this.usuarios = [];
}

public crearBoard(proyecto: string): void {
    this.proyecto = proyecto;
}
}