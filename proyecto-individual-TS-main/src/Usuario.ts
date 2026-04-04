//src/Usuario.ts

export class User{

//Atributos
    private name: string;
    private password: string;

constructor (name: string, password: string){
    this.name = name;
    this.password = password;
}

//Getters

private getName(){
    return this.name;
}

private getPassword(){
    return this.password;
}

//Setters

private setName(name: string){
    this.name = name;
}

private setPassword(password: string){
    this.password = password;
}

//Métodos

public newUser(name: string, password: string): User {
    const user = new User(name, password);
    return user;
}



}