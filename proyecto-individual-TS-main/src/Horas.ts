class Horas { 
    private tiempo: number;

    constructor(tiempo: number) {
        this.tiempo = tiempo;
    }

//Getters

getTiempo(): number {
        return this.tiempo;
}

//Setters

setTiempo(tiempo: number): void { 
        this.tiempo = tiempo;
}


}