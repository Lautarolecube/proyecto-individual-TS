//src/Board.ts

import { ManagerTarea } from "./ManagerTarea";
import {Tarea} from "./Tarea";

export class Board{
    
    private proyecto: string;

//Constructor

    constructor(proyecto: string){
        this.proyecto = proyecto;
    }

//Setter

public setProyecto(proyecto: string){
    this.proyecto = proyecto;
}

//Getter

public getProyecto(){
    return this.proyecto;
}


}