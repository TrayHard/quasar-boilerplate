export const counter = {
    counter: 0 as number,

    get doubleCounter(): number {
        return this.counter * 2;
    },
    get tripleCounter(): number {
        return this.doubleCounter + this.counter;
    },

    INCREMENT(payload: number): void {
        this.counter += payload;
    },

    actIncrement(): Promise<void> {
        return new Promise(() => {
            setTimeout(() => {
                this.INCREMENT(2);
            }, 1000)
        })
    },
};
