export type User = {
    name: string;
    password: string;
}

export const auth = {
    isLoggedIn: false as boolean,
    user1: {
        name: 'John',
        password: 'Doe',
    } as User,

    get loginStatus(): string {
        return this.isLoggedIn ? "authorized" : 'not authorized';
    },

    SET_LOGIN(payload: boolean): void {
        this.isLoggedIn = payload;;
    },

    check_login(payload: User): Promise<Error | string>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.user1.name === payload.name && this.user1.password === payload.password) {
                    this.SET_LOGIN(true);
                    resolve(`User is ${this.loginStatus}`);
                } else {
                    this.SET_LOGIN(false);
                    reject(new Error(`User is ${this.loginStatus}`))
                }
            }, 1000);
        });
    },
};