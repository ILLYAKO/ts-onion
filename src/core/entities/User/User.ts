export class User {
    constructor(
        readonly id: number,
        readonly email: string,
        readonly role: string,
        readonly username: string,
        readonly inn: string,
        readonly password: string,
        readonly age: number
    ) {}
}
