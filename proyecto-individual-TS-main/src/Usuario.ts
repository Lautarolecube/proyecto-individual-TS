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

public getName(): string {
    return this.name;
}

public getPassword(): string {
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


}