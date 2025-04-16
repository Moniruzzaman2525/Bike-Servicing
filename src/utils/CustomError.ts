// src/utils/CustomError.ts
export class CustomError extends Error {
    status: number;
    message: string;
    stack?: string;

    constructor(status: number, message: string, stack?: string) {
        super(message);
        this.status = status;
        this.message = message;
        if (stack) {
            this.stack = stack;
        }
    }
}
